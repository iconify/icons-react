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
		"content": `<style>.d-my9ybhj {
  d: path("M4.25 8h15.5a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 19.75 16H4.25a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 4.25 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ko2v71b_l {
  d: path("M7 9.75h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 7 9.75M7.75 12h.01M15 8v8m1.75-5.5h3m-3 3h3");
}
</style><g class="hntgybcog"><path class="d-my9ybhj"/><path class="ko2v71b_l"/></g>`,
		"fallback": "uix:slide-sample",
	});
}

export default Component;
