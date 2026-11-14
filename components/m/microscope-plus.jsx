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
		"content": `<style>.w4ow_nblt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h4V11h-4Zm4 2.5c5 0 6.5 6 3 10v.171M3.5 14h6m-6 4.5h8.7M18 15v6m-3-3h6");
}
</style><path class="w4ow_nblt"/>`,
		"fallback": "uix-sharp:microscope-plus",
	});
}

export default Component;
