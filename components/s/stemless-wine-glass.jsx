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
		"content": `<style>.ybhqxlb4c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5V12c0 5 2.5 8.5 6.5 8.5s6.5-3.5 6.5-8.5V3.5Zm0 6.5h13");
}
</style><path class="ybhqxlb4c"/>`,
		"fallback": "uix-sharp:stemless-wine-glass",
	});
}

export default Component;
