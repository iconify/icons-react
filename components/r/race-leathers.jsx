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
		"content": `<style>.itsqr6bxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6h5l4 1.5L21 14h-3l-2-3.5v11h-3.25L12 15l-.75 6.5H8v-11L6 14H3l2.5-6.5Zm1-2A1.5 1.5 0 1 1 12 5.5V6m0 0v6.5");
}
</style><path class="itsqr6bxb"/>`,
		"fallback": "uix-sharp:race-leathers",
	});
}

export default Component;
