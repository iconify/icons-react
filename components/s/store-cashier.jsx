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
		"content": `<style>.ufk0ycc1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM3.5 21.5c0-4.003 3.328-6.454 7.684-6.725M14 15.75h8v5.75h-8ZM14 19h8m-4-3.25v-3.5l.75-.5l.75.5l.75-.5l.75.5v3.5m-5 1.5h.01");
}
</style><path class="ufk0ycc1y"/>`,
		"fallback": "uix-sharp:store-cashier",
	});
}

export default Component;
