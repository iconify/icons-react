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
		"content": `<style>.dsleywj5l {
  d: path("m12 2.5l-8 8.25a4.75 4.75 0 1 0 8 4.75a4.75 4.75 0 1 0 8-4.75Z");
}

.i21_4obmb {
  d: path("m12 14.5l2.75 6.5h-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dsleywj5l"/><path class="i21_4obmb"/></g>`,
		"fallback": "uix-sharp:spade-suit",
	});
}

export default Component;
