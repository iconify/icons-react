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
		"content": `<style>.nxwknabox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5V10a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2v11.5ZM7.75 4h1a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 8.75 8h-1A1.75 1.75 0 0 1 6 6.25v-.5A1.75 1.75 0 0 1 7.75 4M14 6h6m-5.5-2.75L19 2m-4.5 6.75L19 10");
}
</style><path class="nxwknabox"/>`,
		"fallback": "uix:pet-deodorant",
	});
}

export default Component;
