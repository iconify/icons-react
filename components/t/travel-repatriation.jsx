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
		"content": `<style>.ty2j6sm-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H6l-1.75-4h2.5l2.75 4h3.25a1 1 0 0 1 0 2H9.5l-2.75 4h-2.5L6 9.5H2.5Zm9 7l5-4.5l5 4.5v7h-10Z");
}
</style><path class="ty2j6sm-g"/>`,
		"fallback": "uix-sharp:travel-repatriation",
	});
}

export default Component;
