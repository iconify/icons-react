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
		"content": `<style>.y-z0m7bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19v15h-19Zm7.5 0v15m0-7.5h11.5M6.25 9v6m7.5-6.75h4m-4 7.5h4");
}
</style><path class="y-z0m7bwz"/>`,
		"fallback": "uix-sharp:space-meal-tray",
	});
}

export default Component;
