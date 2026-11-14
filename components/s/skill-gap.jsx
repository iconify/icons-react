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
		"content": `<style>.trz72livf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3H10v18.5H3.5Zm10 11H20v7.5h-6.5Zm3.25-10.5V11m-2-5.5l2-2l2 2m-4 3.5l2 2l2-2");
}
</style><path class="trz72livf"/>`,
		"fallback": "uix-sharp:skill-gap",
	});
}

export default Component;
