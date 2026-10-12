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
		"content": `<style>.w4pox13zh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.25c0-2.25 3.8-4 8.5-4s8.5 1.75 8.5 4V10h-17zm1.75.75h13.5v4H5.25zM3.5 14.75V14h17v.75c0 2.25-3.8 4-8.5 4s-8.5-1.75-8.5-4Z");
}
</style><path class="w4pox13zh"/>`,
		"fallback": "iconoven:macaron-sharp",
	});
}

export default Component;
