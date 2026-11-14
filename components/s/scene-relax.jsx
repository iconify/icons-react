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
		"content": `<style>.uqle4duvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5h10.5V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4ZM14.5 12h1a2.25 2.25 0 0 1 0 4.5h-1m-7-13c-.75 1 .75 2.25 0 3.5M11 3.5c-.75 1 .75 2.25 0 3.5m7-3.75l1.061 1.689L20.75 6l-1.689 1.061L18 8.75l-1.061-1.689L15.25 6l1.689-1.061Z");
}
</style><path class="uqle4duvu"/>`,
		"fallback": "uix-sharp:scene-relax",
	});
}

export default Component;
