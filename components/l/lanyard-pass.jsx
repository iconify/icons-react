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

.w4-4ipmya {
  d: path("M7.5 2.5h9l-4.5 5Zm4.5 5v2m-2 0h4a3.5 3.5 0 0 1 3.5 3.5v5a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18v-5A3.5 3.5 0 0 1 10 9.5");
}

.yjaxykxwo {
  d: path("M10.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1 4.5h5");
}
</style><g class="hntgybcog"><path class="w4-4ipmya"/><path class="yjaxykxwo"/></g>`,
		"fallback": "uix:lanyard-pass",
	});
}

export default Component;
