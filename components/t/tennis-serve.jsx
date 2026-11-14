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
		"content": `<style>.r42tcdcox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5a4.5 6 0 1 0 9 0a4.5 6 0 1 0-9 0Zm4.5 6v7M15 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9 2.5v12m-4.5-6h9");
}
</style><path class="r42tcdcox"/>`,
		"fallback": "uix-sharp:tennis-serve",
	});
}

export default Component;
