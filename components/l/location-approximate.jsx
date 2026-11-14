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
		"content": `<style>.pq7-tt8gp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.65 2.644a9.5 9.5 0 0 1 6.738 4.896m1.02 3.138a9.5 9.5 0 0 1-2.574 7.921m-2.669 1.94a9.5 9.5 0 0 1-8.33 0m-2.669-1.94a9.5 9.5 0 0 1-2.574-7.921m1.02-3.138a9.5 9.5 0 0 1 6.738-4.896");
}
</style><path class="pq7-tt8gp"/>`,
		"fallback": "uix:location-approximate",
	});
}

export default Component;
