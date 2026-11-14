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
		"content": `<style>.hqj4zf6ke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9v7h-3L12 12l-1.5-2h-3Zm2 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3 18h6.5m5 0H21");
}
</style><path class="hqj4zf6ke"/>`,
		"fallback": "uix-sharp:slider-value",
	});
}

export default Component;
