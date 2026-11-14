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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mxb36in7v {
  d: path("M4.5 5A2.5 2.5 0 0 1 7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19Z");
}

.vzsyx0bop {
  d: path("M13.5 2.5v6h6m-6 3L10 15l3.5 3.5");
}
</style><g class="hntgybcog"><path class="mxb36in7v"/><path class="vzsyx0bop"/></g>`,
		"fallback": "uix:previous-page",
	});
}

export default Component;
