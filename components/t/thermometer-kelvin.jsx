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
		"content": `<style>.fspc6ht8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5v-10a2.5 2.5 0 0 1 5 0v10a3.5 3.5 0 1 1-5 0Zm9.5-8v10m6.5-10l-6.5 6m2-1.75L20 17.5M6.5 9v9");
}
</style><path class="fspc6ht8r"/>`,
		"fallback": "uix-sharp:thermometer-kelvin",
	});
}

export default Component;
