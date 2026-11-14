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

.m5wanwbrf {
  d: path("M7 18.5q-2-2.5-2-5");
}

.o_6gqzb5d {
  d: path("M9 15C9 8 13.5 3.5 20.5 3.5C20.5 10.5 16 15 9 15m-3 6.5Q7 17 9 15");
}

.vx7abibex {
  d: path("M3.25 10a1.75 3.5 0 1 0 3.5 0a1.75 3.5 0 1 0-3.5 0M9 15l5-5");
}
</style><g class="hntgybcog"><path class="o_6gqzb5d"/><path class="m5wanwbrf"/><path class="vx7abibex"/></g>`,
		"fallback": "uix:leaf-tea",
	});
}

export default Component;
