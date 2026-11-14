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
		"content": `<style>.siv9ynb2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0ZM7 19h10l1 2H6ZM9 8h.01m3.49 4h.01M15 8h.01");
}
</style><path class="siv9ynb2d"/>`,
		"fallback": "uix-sharp:snow-globe",
	});
}

export default Component;
