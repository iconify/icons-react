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

.lh_ke48_x {
  d: path("M9 9h1.5a1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 12v-1.5A1.5 1.5 0 0 1 9 9m4.5 0H15a1.5 1.5 0 0 1 1.5 1.5V12a1.5 1.5 0 0 1-1.5 1.5h-1.5A1.5 1.5 0 0 1 12 12v-1.5A1.5 1.5 0 0 1 13.5 9m-2.25-4.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5");
}

.uy51d2b0b {
  d: path("m3.5 10l2 10h13l2-10");
}
</style><g class="hntgybcog"><path class="uy51d2b0b"/><path class="lh_ke48_x"/></g>`,
		"fallback": "uix:material-batch",
	});
}

export default Component;
