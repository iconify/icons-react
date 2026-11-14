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
		"content": `<style>.zjtvx6taz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5v-5q0-2 2-2h4.5q3 0 5 2.5l4 1.25Q21 13 21 15.5Zm2.25-7v-2a1.75 1.75 0 0 1 3.5 0v2m-3.25 7V20m4-4.5V20m4-4.5V20m4-4.5V20");
}
</style><path class="zjtvx6taz"/>`,
		"fallback": "uix-sharp:shoe-brush",
	});
}

export default Component;
