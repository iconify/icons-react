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
		"content": `<style>.hv79drbrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0ZM4 8.5h3M2.5 12h3.25M4 15.5h3");
}
</style><path class="hv79drbrn"/>`,
		"fallback": "uix-sharp:kinetic-energy",
	});
}

export default Component;
