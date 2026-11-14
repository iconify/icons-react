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
		"content": `<style>.hd-2kt4ry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9q9.5-9 19 0M6 6.25V16.5M18 6.25V16.5m-15.5 0h19V20h-19Z");
}
</style><path class="hd-2kt4ry"/>`,
		"fallback": "uix-sharp:platform-canopy",
	});
}

export default Component;
