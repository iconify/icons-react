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
		"content": `<style>.hwapp0abr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3h7A2.5 2.5 0 0 1 15 5.5V9h3.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 9 18.5V15H5.5A2.5 2.5 0 0 1 3 12.5v-7A2.5 2.5 0 0 1 5.5 3Z");
}
</style><path class="hwapp0abr"/>`,
		"fallback": "uix-sharp:shape-union",
	});
}

export default Component;
