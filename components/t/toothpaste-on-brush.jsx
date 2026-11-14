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
		"content": `<style>.p_fu7-byb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5A1.5 1.5 0 0 1 4 15h9v-4h8.5v7H4a1.5 1.5 0 0 1-1.5-1.5Zm11-5.5c0-2.5 1.5-3 2.5-3c0-2 1.5-3 3-2.5c-.5 1 .5 1.5 1 2c1 1 1.5 2 1 3.5");
}
</style><path class="p_fu7-byb"/>`,
		"fallback": "uix-sharp:toothpaste-on-brush",
	});
}

export default Component;
