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
		"content": `<style>.mztzr4lcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18v8H3Zm4 0V3.5h10V9M7 17v4.5h10V17m0-4.5h.01");
}
</style><path class="mztzr4lcf"/>`,
		"fallback": "uix-sharp:photocopier",
	});
}

export default Component;
