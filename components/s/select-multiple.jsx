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
		"content": `<style>.ezrz-bcoe {
  d: path("M5.625 3.5h1.75A2.625 2.625 0 0 1 10 6.125v1.75A2.625 2.625 0 0 1 7.375 10.5h-1.75A2.625 2.625 0 0 1 3 7.875v-1.75A2.625 2.625 0 0 1 5.625 3.5m0 10h1.75A2.625 2.625 0 0 1 10 16.125v1.75A2.625 2.625 0 0 1 7.375 20.5h-1.75A2.625 2.625 0 0 1 3 17.875v-1.75A2.625 2.625 0 0 1 5.625 13.5");
}

.gxed-2guk {
  d: path("M4.75 7L6 8.25l2.25-2.5M4.75 17L6 18.25l2.25-2.5M13 7h8m-8 10h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ezrz-bcoe"/><path class="gxed-2guk"/></g>`,
		"fallback": "uix:select-multiple",
	});
}

export default Component;
