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
		"content": `<style>.i54vikb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l1.5 2.5v9h-3v-9Zm-3.25 11.5h6.5m-3.25 0v4.5m3.25 2.5C7 20.5 2.25 14.5 3.75 4.5m5 16.75c8.25-.75 13-6.75 11.5-16.75");
}
</style><path class="i54vikb0m"/>`,
		"fallback": "iconoven:khanda-sharp",
	});
}

export default Component;
