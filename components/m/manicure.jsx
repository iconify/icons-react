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
		"content": `<style>.m343frb3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10h6a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-4.5A3.5 3.5 0 0 1 7 10m2.25-7.5h1.5a1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 10.75 10h-1.5A1.75 1.75 0 0 1 7.5 8.25v-4A1.75 1.75 0 0 1 9.25 2.5m9.25 1s2 2.5 2 3.75a2 2 0 0 1-4 0c0-1.25 2-3.75 2-3.75");
}
</style><path class="m343frb3f"/>`,
		"fallback": "uix:manicure",
	});
}

export default Component;
