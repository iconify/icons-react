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
		"content": `<style>.d8uezydnt {
  fill: currentColor;
  d: path("M6.5 10H13a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 13 14H6.5A1.5 1.5 0 0 1 5 12.5v-1A1.5 1.5 0 0 1 6.5 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pjhvei21y {
  d: path("M5.125 7.5h13.75a2.625 2.625 0 0 1 2.625 2.625v3.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 13.875v-3.75A2.625 2.625 0 0 1 5.125 7.5");
}
</style><g class="hntgybcog"><path class="pjhvei21y"/><path class="d8uezydnt"/></g>`,
		"fallback": "uix:quota-progress",
	});
}

export default Component;
