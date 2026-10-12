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
		"content": `<style>.hy20y9cmx {
  d: path("M7.5 7.5L9 13m0 0l5.25-2.5l6-1.5M9 13l-1.25 4l1.5 4.25M7.75 9l3 1.5L12 8M7.75 9L5 11l-.25-3");
}

.t30k1lbgj {
  cx: 6.75px;
  cy: 4.75px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="t30k1lbgj"/><path class="hy20y9cmx"/></g>`,
		"fallback": "iconoven:kickboxing-sharp",
	});
}

export default Component;
