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
		"content": `<style>.rsl4s0trq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5h17v-3h-3v-3H15v-3h-2.5v-3h-1v3H9v3H6.5v3h-3Z");
}
</style><path class="rsl4s0trq"/>`,
		"fallback": "uix-sharp:pyramid-stepped",
	});
}

export default Component;
