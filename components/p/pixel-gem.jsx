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
		"content": `<style>.h7xnru8dk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4.5h8.5V7h2.5v2.5h2.5V12h-2.5v2.5h-2.5V17h-3v2.5h-2.5V17h-3v-2.5h-2.5V12h-2.5V9.5h2.5V7h2.5Zm-5 5h18.5");
}
</style><path class="h7xnru8dk"/>`,
		"fallback": "uix-sharp:pixel-gem",
	});
}

export default Component;
