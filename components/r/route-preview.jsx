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

.mr037mb8t {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.r9s1lrt4v {
  d: path("M5 16v-6a3 3 0 0 1 3-3h7.5m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M14 18.5q4-5 8 0q-4 5-8 0");
}
</style><g class="hntgybcog"><path class="mr037mb8t"/><path class="r9s1lrt4v"/></g>`,
		"fallback": "uix:route-preview",
	});
}

export default Component;
