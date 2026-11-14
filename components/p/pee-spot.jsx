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
		"content": `<style>.q5aqdfbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 20V7a2.75 2.75 0 0 1 5.5 0v13m-7-13H13M3.5 20H14m-8-9.5H3.75v3H6m5.5-3h2.25v3H11.5M21 5q-4.5 3.5-5 13");
}
</style><path class="q5aqdfbji"/>`,
		"fallback": "uix:pee-spot",
	});
}

export default Component;
