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
		"content": `<style>.on5mcmbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7L12 18m0-11L3.5 18m12-13c0-1.25 1-2 2.25-2S20 3.75 20 5c0 2-4.5 3-4.5 5H20");
}
</style><path class="on5mcmbkf"/>`,
		"fallback": "uix-sharp:superscript",
	});
}

export default Component;
