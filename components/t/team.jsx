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
		"content": `<style>.biepbhlox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5c0-2.9 2.75-5 6.5-5h5c3.75 0 6.5 2.1 6.5 5Zm6.75-16a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-6 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm12 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="biepbhlox"/>`,
		"fallback": "uix-sharp:team",
	});
}

export default Component;
