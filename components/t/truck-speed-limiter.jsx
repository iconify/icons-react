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

.z3h7tytex {
  d: path("M7 15a5 5 0 0 1 10 0m-5 0l2.5-4.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="z3h7tytex"/></g>`,
		"fallback": "uix:truck-speed-limiter",
	});
}

export default Component;
