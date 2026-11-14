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
		"content": `<style>.mk5pgw-1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6h16l-3 12h-16Zm2 4H9m2.75 0h1.5M16 10h1.5m-11 4H8m2.75 0h1.5M15 14h1.5");
}
</style><path class="mk5pgw-1n"/>`,
		"fallback": "uix-sharp:spatial-keyboard",
	});
}

export default Component;
