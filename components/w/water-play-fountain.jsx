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
		"content": `<style>.r0q5mspei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm9-3v-9m-3 9Q8 4 4 12m11 .5q1-8.5 5-.5");
}
</style><path class="r0q5mspei"/>`,
		"fallback": "uix-sharp:water-play-fountain",
	});
}

export default Component;
