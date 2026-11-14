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

.k1ghlqvwn {
  d: path("M3 15q3-2.25 6 0t6 0t6 0");
}

.m24jkxbcc {
  d: path("M8 4v8a2 2 0 0 0 2 2m6-10v8a2 2 0 0 1-2 2M8 7h8m-8 3h8");
}
</style><g class="hntgybcog"><path class="k1ghlqvwn"/><path class="m24jkxbcc"/></g>`,
		"fallback": "uix:swimming-pool",
	});
}

export default Component;
