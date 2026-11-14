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
		"content": `<style>.cctdhsici {
  d: path("M10 7.5h7.5M10 12h6m-6 4.5h7.5");
}

.h62x9kblw {
  d: path("M5.5 12A1.25 1.25 0 1 0 8 12a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i36orkb_x {
  fill: currentColor;
  d: path("M5.5 7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.in9rgsxwv {
  fill: currentColor;
  d: path("M5.5 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.iwmyaxv-z {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3");
}
</style><g class="hntgybcog"><path class="iwmyaxv-z"/><path class="i36orkb_x"/><path class="h62x9kblw"/><path class="in9rgsxwv"/><path class="cctdhsici"/></g>`,
		"fallback": "uix:status-board",
	});
}

export default Component;
