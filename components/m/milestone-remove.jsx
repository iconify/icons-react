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
		"content": `<style>.w3il-ower {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.767 15.267L6 9.5l6-6l6 6l-2.273 2.273M2.5 9.5H6m12 0h3.5m-6 6l5 5m0-5l-5 5");
}
</style><path class="w3il-ower"/>`,
		"fallback": "uix-sharp:milestone-remove",
	});
}

export default Component;
