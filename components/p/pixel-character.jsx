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
		"content": `<style>.n-p1zg3qw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7V5H18v5.5h-2.5V13H19v4h-3v4.5h-2.5v-4h-3v4H8V17H5v-4h3.5v-2.5H6V5h2.5ZM9 7.75h6");
}
</style><path class="n-p1zg3qw"/>`,
		"fallback": "uix-sharp:pixel-character",
	});
}

export default Component;
