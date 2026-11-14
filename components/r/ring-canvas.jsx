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
		"content": `<style>.kg7h63bqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm14 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7 5h10m2 2v10m-2 2H7m-2-2V7m3 1h8v8H8Z");
}
</style><path class="kg7h63bqb"/>`,
		"fallback": "uix-sharp:ring-canvas",
	});
}

export default Component;
