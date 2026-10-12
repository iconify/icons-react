import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hzlunw8gv {
  d: path("M17.75 8.75v4");
}

.i2f29gznq {
  cx: 10.5px;
  cy: 10.75px;
  r: 3.5px;
}

.vm5129jaw {
  d: path("M3.25 2.75h17.5v16H3.25zm3.75 16v2.5m10-2.5v2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vm5129jaw"/><circle class="i2f29gznq"/><path class="hzlunw8gv"/></g>`,
		"fallback": "iconoven:safe-dial-sharp",
	});
}

export default Component;
