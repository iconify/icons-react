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
		"content": `<style>.ae00-bcxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.1 2.9a4.25 4.25 0 1 0 3 5.2a3.5 3.5 0 0 1-3-5.2M6.5 2.75v9.5M4.25 5L6.5 2.75L8.75 5m-4.5 5l2.25 2.25L8.75 10m-6 6.25q1.54-2 3.08 0t3.08 0t3.08 0t3.08 0t3.08 0t3.08 0m-18.48 4q1.54-2 3.08 0t3.08 0t3.08 0t3.08 0t3.08 0t3.08 0");
}
</style><path class="ae00-bcxe"/>`,
		"fallback": "iconoven:tidal-energy",
	});
}

export default Component;
