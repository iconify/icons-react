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
		"content": `<style>.rwvgtfb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 15.5h11A1.5 1.5 0 0 1 19 17a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 17a1.5 1.5 0 0 1 1.5-1.5m-3 6h17m-12-9L7 10m5 2.5v-3m3.5 3L17 10M7 4.5h10m-8-2l-2 2l2 2m6-4l2 2l-2 2");
}
</style><path class="rwvgtfb1x"/>`,
		"fallback": "uix:sprinkler-oscillating",
	});
}

export default Component;
