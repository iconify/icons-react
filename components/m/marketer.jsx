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
		"content": `<style>.mcpycab8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM2.5 21c0-3.5 2.25-6 4.75-6c2 0 3.75 1 4.75 2.5M13.5 8L18 5.5v8L13.5 11Zm2 3.75v3.75m5-8.25a3.25 3.25 0 0 1 0 4.5");
}
</style><path class="mcpycab8d"/>`,
		"fallback": "uix-sharp:marketer",
	});
}

export default Component;
