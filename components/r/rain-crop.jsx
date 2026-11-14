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
		"content": `<style>.deemz4p9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10.5H17a3 3 0 0 0 0-6A5.5 5.5 0 0 0 7.25 6a2.25 2.25 0 0 0-.75 4.5m-1 2.75l-1 3.25m15-3.25l-1 3.25m-6.5 5v-5m0 2q-4 0-4-3.5q4 0 4 3.5m0-2q4 0 4-3.5q-4 0-4 3.5");
}
</style><path class="deemz4p9a"/>`,
		"fallback": "uix:rain-crop",
	});
}

export default Component;
