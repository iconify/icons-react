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
		"content": `<style>.p40bg-bdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.75h12l-2.5 3H5Zm6 0V3c3.5.5 5.5 4 5.5 7.25H8.5M21.5 9H19l-3.5 10.25m-13 0q2.25-1.5 4.5 0t4.5 0q2-1.5 4 0");
}
</style><path class="p40bg-bdv"/>`,
		"fallback": "uix-sharp:river-boat-bank",
	});
}

export default Component;
