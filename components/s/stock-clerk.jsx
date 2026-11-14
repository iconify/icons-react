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
		"content": `<style>.rrlo9elhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM3.5 21.5c0-4.098 3.487-6.569 7.995-6.74m2.755.49h7.5v6.5h-7.5Zm3.75 0v2.25m-3.75 0h7.5");
}
</style><path class="rrlo9elhj"/>`,
		"fallback": "uix-sharp:stock-clerk",
	});
}

export default Component;
