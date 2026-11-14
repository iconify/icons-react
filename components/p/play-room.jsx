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
		"content": `<style>.g0fmzibmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 9.5h5.5A2.25 2.25 0 0 1 16 11.75A2.25 2.25 0 0 1 13.75 14h-5.5A2.25 2.25 0 0 1 6 11.75A2.25 2.25 0 0 1 8.25 9.5m6.25 0l2-4.75c.5-1.25 2.25-1.5 3.25-.5L21 5.75L18.75 7l-1 3M7.5 14L6 18m8.5-4l1.5 4M2.5 16.75c4.5 3.75 14.5 3.75 19 0M6 11L3.25 9");
}
</style><path class="g0fmzibmv"/>`,
		"fallback": "uix:play-room",
	});
}

export default Component;
