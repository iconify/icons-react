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
		"content": `<style>.p825_ubko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5L7.25 18M15 2.5l-1.391 12.322M3 7.5h15.5M2.5 13h13m-1.25 5L18 14.5l3.75 3.5v3.75h-7.5Z");
}
</style><path class="p825_ubko"/>`,
		"fallback": "uix-sharp:property-id",
	});
}

export default Component;
