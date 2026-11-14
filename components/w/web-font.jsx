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
		"content": `<style>.aivtkibui {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3M2.5 7.5h19");
}

.e6lndd3hj {
  d: path("m5.25 18.25l3.5-7.75l3.5 7.75M6.5 15.5H11m3.25.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4.5-2.25v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="aivtkibui"/><path class="e6lndd3hj"/></g>`,
		"fallback": "uix:web-font",
	});
}

export default Component;
