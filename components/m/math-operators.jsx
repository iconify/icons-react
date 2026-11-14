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
		"content": `<style>.mx2skhbkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8v8H3Zm10 0h8v8h-8ZM3 13h8v8H3Zm10 0h8v8h-8ZM7 5.5v3M5.5 7h3M15 7h4M5 17h4m6-1.5l4 3m0-3l-4 3");
}
</style><path class="mx2skhbkd"/>`,
		"fallback": "uix-sharp:math-operators",
	});
}

export default Component;
