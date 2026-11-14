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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.x_2s1k2jd {
  d: path("M15.5 17v-6.5h-7M11 8l-2.5 2.5L11 13");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="x_2s1k2jd"/></g>`,
		"fallback": "uix:turn-left-only",
	});
}

export default Component;
