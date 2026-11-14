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
		"content": `<style>.fxdoz2wcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11a4.5 4.5 0 0 1 9 0v8.5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2ZM12 6.5v-3m-2.5 0h5m-7 9.5h9");
}
</style><path class="fxdoz2wcj"/>`,
		"fallback": "uix-sharp:oxygen-tank",
	});
}

export default Component;
