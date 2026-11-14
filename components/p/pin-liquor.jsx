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
		"content": `<style>.cb9f7ob3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4v5c0 1 3 2 3 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20v-8c0-2.5 3-3.5 3-4.5ZM7 14h10M7 18h10");
}
</style><path class="cb9f7ob3g"/>`,
		"fallback": "uix-sharp:pin-liquor",
	});
}

export default Component;
