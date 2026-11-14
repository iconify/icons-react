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
		"content": `<style>.d20di0lln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM7 5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm4.25 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM7.25 15c0-2.25 2.25-3.5 4.75-3.5s4.75 1.25 4.75 3.5M4.5 15h15v3.5h-15Zm2.75 3.5c0 2 2.25 2.75 4.75 2.25c2.5.5 4.75-.25 4.75-2.25");
}
</style><path class="d20di0lln"/>`,
		"fallback": "uix-sharp:pet-bandage",
	});
}

export default Component;
