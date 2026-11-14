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
		"content": `<style>.ml0f0ye5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14L21 3M7.5 4.5L11 9.25l4-4.75m-4 4.75V20.5M4.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM4 20.5h14");
}
</style><path class="ml0f0ye5o"/>`,
		"fallback": "uix-sharp:rod-holder",
	});
}

export default Component;
