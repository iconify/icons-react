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

.i5z8nlb8s {
  d: path("M8.75 9.5h6.5A1.75 1.75 0 0 1 17 11.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 7 13.75v-2.5A1.75 1.75 0 0 1 8.75 9.5M6 18.25h.01m11.99 0h.01");
}

.kdl7mbcxf {
  d: path("M8 3a4 4 0 0 0 8 0h4l1 18H3L4 3Z");
}
</style><g class="hntgybcog"><path class="kdl7mbcxf"/><path class="i5z8nlb8s"/></g>`,
		"fallback": "uix:ski-race-bib",
	});
}

export default Component;
