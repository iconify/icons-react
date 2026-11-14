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
		"content": `<style>.vr1d9ac5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6L12 2.5L16.5 6Zm3 0h3A1.5 1.5 0 0 1 15 7.5V9a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 9V7.5A1.5 1.5 0 0 1 10.5 6M6 10.5h12m-11 0l-2.5 10m12.5-10l2.5 10M6 14.5h12M3 8.25h2.5m13 0H21M3 20.5q2.25-1.25 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="vr1d9ac5y"/>`,
		"fallback": "uix:lighthouse-screwpile",
	});
}

export default Component;
