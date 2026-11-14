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
		"content": `<style>.n0zrccw2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5A3 3 0 0 1 5.5 9A4 4 0 0 1 12 4.5a4 4 0 0 1 7 3.25a3.5 3.5 0 0 1-1.5 6.75Zm1.5 2.75l-1 3.5m5-3.5l-1 3.5m5-3.5l-1 3.5");
}
</style><path class="n0zrccw2r"/>`,
		"fallback": "uix:mood-rainy",
	});
}

export default Component;
