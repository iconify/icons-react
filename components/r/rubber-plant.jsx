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
		"content": `<style>.t0c8ypb_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 17h8l-1 4.5H9Zm4 0V9m0 0c-3-2-2.5-5 0-6.5C14.5 4 15 7 12 9Zm0 4.5c-3 2-7.5 0-8.5-4c3.5-1 7 .5 8.5 4Zm0-1.5c3 2 7.5 0 8.5-4c-3.5-.75-7 .75-8.5 4Z");
}
</style><path class="t0c8ypb_e"/>`,
		"fallback": "uix-sharp:rubber-plant",
	});
}

export default Component;
