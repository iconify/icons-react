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
		"content": `<style>.h3g8ovb3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19V5h18v6.8M3 19L17 5M3 10l7.92 7.92M9 5l9.405 9.405M14.75 18l2 2L21 15.75");
}
</style><path class="h3g8ovb3w"/>`,
		"fallback": "uix-sharp:soccer-clean-sheet",
	});
}

export default Component;
