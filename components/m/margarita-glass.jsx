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
		"content": `<style>.tndfjlb-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h16c0 2.75-2.5 4-5 4c0 2.5-1 4.5-3 4.5s-3-2-3-4.5C6.5 8 4 6.75 4 4Zm8 8.5v8m-4 0h8");
}
</style><path class="tndfjlb-v"/>`,
		"fallback": "uix-sharp:margarita-glass",
	});
}

export default Component;
