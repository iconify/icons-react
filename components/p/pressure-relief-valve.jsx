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
		"content": `<style>.g2_aiubgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21v-3a3 3 0 0 1 3-3h1.5m0-3h7v6h-7Zm7 3h5M12 12v-1l-2-1l4-1.5L10 7l2-1v-.75ZM8.5 5.25a3.5 2.75 0 0 1 7 0Z");
}
</style><path class="g2_aiubgb"/>`,
		"fallback": "uix-sharp:pressure-relief-valve",
	});
}

export default Component;
