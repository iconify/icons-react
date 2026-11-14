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
		"content": `<style>.h9ic2-21z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 7.5l2.25 9H18.5l2-6H6.25m-2-8h4A1.75 1.75 0 0 1 10 4.25v1.5A1.75 1.75 0 0 1 8.25 7.5h-4A1.75 1.75 0 0 1 2.5 5.75v-1.5A1.75 1.75 0 0 1 4.25 2.5m3.5 17.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m8 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="h9ic2-21z"/>`,
		"fallback": "uix:smart-cart-screen",
	});
}

export default Component;
