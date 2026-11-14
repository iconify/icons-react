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
		"content": `<style>.foylt9ial {
  d: path("M7 20v-8.5a3 3 0 0 1 3-3h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.row4r_b0n {
  d: path("M15.25 4.75L19 8.5l-3.75 3.75");
}
</style><g class="hntgybcog"><path class="foylt9ial"/><path class="row4r_b0n"/></g>`,
		"fallback": "uix:lane-arrow-right",
	});
}

export default Component;
