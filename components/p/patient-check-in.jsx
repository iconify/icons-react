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
		"content": `<style>.hf18m8ifk {
  fill: currentColor;
  d: path("M9.25 16.25h5.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 8.5 17a.75.75 0 0 1 .75-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rlvf0f4si {
  d: path("m9.5 9l1.75 1.75L14.5 7.5");
}

.sqgzs9b2w {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5");
}

.u4pokgbpg {
  d: path("M8.75 5h6.5A1.75 1.75 0 0 1 17 6.75v4.5A1.75 1.75 0 0 1 15.25 13h-6.5A1.75 1.75 0 0 1 7 11.25v-4.5A1.75 1.75 0 0 1 8.75 5");
}
</style><g class="hntgybcog"><path class="sqgzs9b2w"/><path class="u4pokgbpg"/><path class="rlvf0f4si"/><path class="hf18m8ifk"/></g>`,
		"fallback": "uix:patient-check-in",
	});
}

export default Component;
