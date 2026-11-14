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
		"content": `<style>.c32qphw7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h8v8H3Zm10 4a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-1-13l5 7.5H7Z");
}
</style><path class="c32qphw7n"/>`,
		"fallback": "uix-sharp:solid-shapes",
	});
}

export default Component;
