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
		"content": `<style>.g83q7h7rq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18c0 5-4 8.5-9 8.5S3 16 3 11m3.5 0c1-5 3.5-7 5.5-7s4.5 2 5.5 7");
}
</style><path class="g83q7h7rq"/>`,
		"fallback": "uix:lifting-chalk-bowl",
	});
}

export default Component;
