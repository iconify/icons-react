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
		"content": `<style>.gsaz-_nbv {
  d: path("m14.75 16.25l3.5 2.5l3.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix2xfdf8l {
  d: path("M9.5 3.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7 11.75H20a1.75 1.75 0 0 1 1.75 1.75v2.25A1.75 1.75 0 0 1 20 21.25h-3.5a1.75 1.75 0 0 1-1.75-1.75v-2.25a1.75 1.75 0 0 1 1.75-1.75");
}

.yov5facix {
  d: path("M15.178 12.91L11 5.25L3.5 19h8.438");
}
</style><g class="hntgybcog"><path class="yov5facix"/><path class="ix2xfdf8l"/><path class="gsaz-_nbv"/></g>`,
		"fallback": "uix:party-invitation",
	});
}

export default Component;
