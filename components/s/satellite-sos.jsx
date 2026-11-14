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
		"content": `<style>.rtba4ebvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3h5v7h-5Zm-6 .5h4v6h-4Zm13 0h4v6h-4Zm-9 3h2m5 0h2m-6.75 7.25a3 3 0 0 0 4.5 0m-6.5 2a6 6 0 0 0 8.5 0M18 14.5V18m0 3h.01");
}
</style><path class="rtba4ebvz"/>`,
		"fallback": "uix-sharp:satellite-sos",
	});
}

export default Component;
