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
		"content": `<style>.xxbs2itql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.5L7.5 11A2 2 0 0 1 11 9a1.8 1.8 0 0 1 3.5.5A1.8 1.8 0 0 1 17 12l4.25 5.5m-18.75 0h19");
}
</style><path class="xxbs2itql"/>`,
		"fallback": "uix-sharp:ore-stockpile",
	});
}

export default Component;
