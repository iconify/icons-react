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
		"content": `<style>.p6ee8nb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 13.5c-2-2-3.5-4-3.5-7.5a3.5 3.5 0 0 1 7 0c0 3.5-1.5 5.5-3.5 7.5Zm-14.75 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0c5.75 0 2.75-5.5 6.75-5.5");
}
</style><path class="p6ee8nb1w"/>`,
		"fallback": "uix-sharp:patrol-route",
	});
}

export default Component;
