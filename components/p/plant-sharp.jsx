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
		"content": `<style>.ygzll7x7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 13.25h12.5l-1.4 6.6l-.283 1.388l-1.417.012h-6.3l-1.417-.012l-.283-1.388Zm6.25 0v-4.5m-.75 1.5q-5.625 0-6-5.25q5.625 0 6 5.25Zm1.5-1.5c.25-3.5 2.25-5.5 6-5.5c-.25 3.5-2.25 5.5-6 5.5Z");
}
</style><path class="ygzll7x7m"/>`,
		"fallback": "iconoven:plant-sharp",
	});
}

export default Component;
