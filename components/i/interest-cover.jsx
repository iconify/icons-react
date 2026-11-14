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

.jv-a7zbsj {
  d: path("M7 9a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 7 9m6.5 5.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.v372jr48x {
  d: path("m12 2.5l8 3V11c0 5-3.5 8.75-8 10.5C7.5 19.75 4 16 4 11V5.5ZM9 15.75L15 8");
}
</style><g class="hntgybcog"><path class="v372jr48x"/><path class="jv-a7zbsj"/></g>`,
		"fallback": "uix:interest-cover",
	});
}

export default Component;
