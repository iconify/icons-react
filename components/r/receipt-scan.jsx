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
		"content": `<style>.i2mx4oywo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2m6-9h5A1.5 1.5 0 0 1 16 8.5v7.882A.69.69 0 0 1 15 17l-.329-.165a1.5 1.5 0 0 0-1.342 0l-.658.33a1.5 1.5 0 0 1-1.342 0l-.658-.33a1.5 1.5 0 0 0-1.342 0L9 17a.69.69 0 0 1-1-.618V8.5A1.5 1.5 0 0 1 9.5 7m1 3h3m-3 3h3");
}
</style><path class="i2mx4oywo"/>`,
		"fallback": "uix:receipt-scan",
	});
}

export default Component;
