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
		"content": `<style>.wmk_hjb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12c0-5 4-8 8.5-8s8.5 3 8.5 8Zm6 0v7c0 1 1 1.5 2.5 1.5s2.5-.5 2.5-1.5v-7");
}
</style><path class="wmk_hjb1y"/>`,
		"fallback": "uix-sharp:mushroom",
	});
}

export default Component;
