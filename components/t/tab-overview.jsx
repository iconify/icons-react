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
		"content": `<style>.l36fij15z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v8h-8Zm11 0h8v8h-8Zm-11 11h8v8h-8Zm11 0h8v8h-8Zm-11-8h8m3 0h8m-19 11h8m3 0h8");
}
</style><path class="l36fij15z"/>`,
		"fallback": "uix-sharp:tab-overview",
	});
}

export default Component;
