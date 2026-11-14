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

.iyy_4mslo {
  d: path("m13.5 11.25l2 2l2-2");
}

.wh3ncvbwu {
  d: path("M3.5 13.25a8.5 8.5 0 0 1 17 0a6 6 0 0 1-12 0a3.5 3.5 0 0 1 7 0");
}
</style><g class="hntgybcog"><path class="wh3ncvbwu"/><path class="iyy_4mslo"/></g>`,
		"fallback": "uix:recursion",
	});
}

export default Component;
