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
		"content": `<style>.x-866erob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13.5C4 7 8 4 12 4s8 3 8 9.5Zm4.5 0v5A2.5 2.5 0 0 0 11 21h2a2.5 2.5 0 0 0 2.5-2.5v-5");
}
</style><path class="x-866erob"/>`,
		"fallback": "uix-sharp:mushroom-button",
	});
}

export default Component;
