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
		"content": `<style>.bfuf9yblw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17m-17 5.5H10M3.5 16H8m4-2a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m6 2.5l2.5 2.5");
}
</style><path class="bfuf9yblw"/>`,
		"fallback": "uix:search-list",
	});
}

export default Component;
