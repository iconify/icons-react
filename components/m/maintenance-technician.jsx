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
		"content": `<style>.b9w1jvrnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5h13m-11.5 0a5 5 0 0 1 10 0M7 7.5V9a3.5 3.5 0 0 0 7 0V7.5m-1.728 14.25H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.397 0 2.686.243 3.787.685m7.213.315a2.25 2.25 0 1 1-1.75-1.75m-2 3.75L15 21");
}
</style><path class="b9w1jvrnn"/>`,
		"fallback": "uix:maintenance-technician",
	});
}

export default Component;
