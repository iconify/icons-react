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
		"content": `<style>.uetd-nbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5h6v7h-6Zm9 0h6v7h-6Zm-3 3.5h3M8 8.5a4.25 4.25 0 1 1 8 0m-12 13c0-2 3.5-3.25 8-3.25s8 1.25 8 3.25");
}
</style><path class="uetd-nbvi"/>`,
		"fallback": "uix-sharp:race-spotter",
	});
}

export default Component;
