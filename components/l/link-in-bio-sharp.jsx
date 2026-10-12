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
		"content": `<style>.hhov-gbog {
  cx: 12px;
  cy: 7px;
  r: 1.5px;
}

.l5g864bjc {
  d: path("M5.25 2.75h13.5v18.5H5.25z");
}

.lzhfyj0gc {
  d: path("M8.75 11h6.5v2h-6.5zm0 4.5h6.5v2h-6.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l5g864bjc"/><circle class="hhov-gbog"/><path class="lzhfyj0gc"/></g>`,
		"fallback": "iconoven:link-in-bio-sharp",
	});
}

export default Component;
