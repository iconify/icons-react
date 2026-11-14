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
		"content": `<style>.z7mro9bvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM6.5 9v6l-2 6.5m2-6.5l2 6.5m-2-11l6.5.5m-1 10.5L13 11h7l1 10.5m-8.5-5.25h8");
}
</style><path class="z7mro9bvu"/>`,
		"fallback": "uix-sharp:person-walker-frame",
	});
}

export default Component;
