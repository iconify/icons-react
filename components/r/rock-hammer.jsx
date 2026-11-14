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
		"content": `<style>.uynv2709u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4h3a1 1 0 0 1 1 1v.25H14L20.5 8l-6.5.75H8.5V9a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm7 4.75V21");
}
</style><path class="uynv2709u"/>`,
		"fallback": "uix-sharp:rock-hammer",
	});
}

export default Component;
