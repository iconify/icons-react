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
		"content": `<style>.vyopi496r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h2.75A2.625 2.625 0 0 1 11 5.625v2.75A2.625 2.625 0 0 1 8.375 11h-2.75A2.625 2.625 0 0 1 3 8.375v-2.75A2.625 2.625 0 0 1 5.625 3m10 0h2.75A2.625 2.625 0 0 1 21 5.625v2.75A2.625 2.625 0 0 1 18.375 11h-2.75A2.625 2.625 0 0 1 13 8.375v-2.75A2.625 2.625 0 0 1 15.625 3m-10 10h2.75A2.625 2.625 0 0 1 11 15.625v2.75A2.625 2.625 0 0 1 8.375 21h-2.75A2.625 2.625 0 0 1 3 18.375v-2.75A2.625 2.625 0 0 1 5.625 13m10 0h2.75A2.625 2.625 0 0 1 21 15.625v2.75A2.625 2.625 0 0 1 18.375 21h-2.75A2.625 2.625 0 0 1 13 18.375v-2.75A2.625 2.625 0 0 1 15.625 13M7 5.5v3M5.5 7h3M15 7h4M5 17h4m6-1.5l4 3m0-3l-4 3");
}
</style><path class="vyopi496r"/>`,
		"fallback": "uix:math-operators",
	});
}

export default Component;
