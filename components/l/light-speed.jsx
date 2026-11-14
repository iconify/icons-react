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
		"content": `<style>.nqkcddbkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 12H21m-4-4l4 4l-4 4M2.5 12h3M3 7h10M3 17h10");
}
</style><path class="nqkcddbkb"/>`,
		"fallback": "uix-sharp:light-speed",
	});
}

export default Component;
