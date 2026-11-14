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
		"content": `<style>.y5si7eblz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.4 2.5H18v11.6m-.4 7.4H6V9.9m4.5 8.1h3M3.5 3.5l17 17");
}
</style><path class="y5si7eblz"/>`,
		"fallback": "uix-sharp:smartphone-off",
	});
}

export default Component;
