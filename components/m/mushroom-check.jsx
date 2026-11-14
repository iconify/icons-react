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

.tvzgkhfjq {
  d: path("M7.5 11.25L7 19.5A1.5 1.5 0 0 0 8.5 21h2a1.5 1.5 0 0 0 1.5-1.5l-.5-8.25M14.75 18l2 2L21 15.75");
}

.vo8bywb8q {
  d: path("M2.5 12c0-5.5 4-9 9.5-9s9.5 3.5 9.5 9C18 10.75 6 10.75 2.5 12");
}
</style><g class="hntgybcog"><path class="vo8bywb8q"/><path class="tvzgkhfjq"/></g>`,
		"fallback": "uix:mushroom-check",
	});
}

export default Component;
