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
		"content": `<style>.c0pveubrp {
  cx: 6px;
  cy: 6.25px;
  r: 3.25px;
}

.e4bskll8f {
  d: path("m8.6 8.2l11.65 9.3M8.6 15.8l11.65-9.3");
}

.ptricrbgn {
  cx: 6px;
  cy: 17.75px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="c0pveubrp"/><circle class="ptricrbgn"/><path class="e4bskll8f"/></g>`,
		"fallback": "iconoven:scissors-sharp",
	});
}

export default Component;
