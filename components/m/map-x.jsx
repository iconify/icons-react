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
		"content": `<style>.h87tkwbka {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 6l6-2.5L15 6l6-2.5v8.75h-8.75v7L9 18l-6 2.5Zm6-2.5V18m6-12v6.25m.5 3.25l5 5m0-5l-5 5");
}
</style><path class="h87tkwbka"/>`,
		"fallback": "uix-sharp:map-x",
	});
}

export default Component;
