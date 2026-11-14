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
		"content": `<style>.ubrftfbwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.454 18.01L14.475 5.99l3.535 3.535L5.99 21.546ZM14.121 5.636l3.536-3.535l4.242 4.242l-3.535 3.536Z");
}
</style><path class="ubrftfbwd"/>`,
		"fallback": "uix-sharp:rod-tube",
	});
}

export default Component;
