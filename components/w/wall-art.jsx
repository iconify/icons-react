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

.ihra2pbnw {
  d: path("M5.125 6h13.75A2.625 2.625 0 0 1 21.5 8.625v8.75A2.625 2.625 0 0 1 18.875 20H5.125A2.625 2.625 0 0 1 2.5 17.375v-8.75A2.625 2.625 0 0 1 5.125 6M7 6l5-3.5L17 6");
}

.m-uiwcbld {
  d: path("m5.5 17l4-5l3.25 3.5L15 13l3.5 4");
}
</style><g class="hntgybcog"><path class="ihra2pbnw"/><path class="m-uiwcbld"/></g>`,
		"fallback": "uix:wall-art",
	});
}

export default Component;
