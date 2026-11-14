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
		"content": `<style>.ba-rg7-jm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16a5 5 0 0 1 10 0m-12 0h10m-3-13.5v5M7.25 5.25L9.5 7.5l2.25-2.25m7 9.25l-3.5 4h2.5l-.5 3l3.5-4.25h-2.5Z");
}
</style><path class="ba-rg7-jm"/>`,
		"fallback": "uix-sharp:sunset-trigger",
	});
}

export default Component;
