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
		"content": `<style>.om5o62e6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h10v3H10Zm2 3v16h6v-16M2.5 20q2.5-1.25 5 0q2.25 1.25 4.5 0M3.5 8h5.75M7.5 6.25L9.25 8L7.5 9.75m-4 4.75h5.75M7.5 12.75l1.75 1.75l-1.75 1.75");
}
</style><path class="om5o62e6r"/>`,
		"fallback": "uix-sharp:intake-tower",
	});
}

export default Component;
