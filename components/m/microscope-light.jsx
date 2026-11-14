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
		"content": `<style>.w1us-3bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h4.5V10H7ZM11.5 5c6 0 8 8.5 4 13v3m-11-2.75h8.25M4.5 21H19M7.75 12.75l-1.5 2.75m4.5-2.75l1.5 2.75");
}
</style><path class="w1us-3bfe"/>`,
		"fallback": "uix-sharp:microscope-light",
	});
}

export default Component;
