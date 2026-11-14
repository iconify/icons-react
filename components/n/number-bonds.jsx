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
		"content": `<style>.yi8jpobek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-5-10L7 15.5M13.5 8l3.5 7.5");
}
</style><path class="yi8jpobek"/>`,
		"fallback": "uix:number-bonds",
	});
}

export default Component;
