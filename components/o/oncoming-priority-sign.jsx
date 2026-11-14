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

.icv6syboj {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M8.5 18V6.5");
}

.jiijv7bbp {
  d: path("M5.75 9.25L8.5 6.5l2.75 2.75M16 7v6m-2-2l2 2l2-2");
}
</style><g class="hntgybcog"><path class="icv6syboj"/><path class="jiijv7bbp"/></g>`,
		"fallback": "uix:oncoming-priority-sign",
	});
}

export default Component;
