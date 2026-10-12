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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.s2nm2lbos {
  d: path("M10.5 8H7.25v2.5h3.5V13H7.5M9 7v1m0 5v1m7.5-6h-3.25v2.5h3.5V13H13.5M15 7v1m0 5v1m-6.25 2.5L10.1 18h3.8l1.35-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="s2nm2lbos"/></g>`,
		"fallback": "iconoven:money-face-sharp",
	});
}

export default Component;
