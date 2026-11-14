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
		"content": `<style>.e4my_fywx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 15c.75 0 1-6.5 3.25-6.5S7.75 15 8.5 15s1-6.5 3.25-6.5S14.25 15 15 15s1-6.5 3.25-6.5s2.5 6.5 3.25 6.5M2 6.25h3.5m2 0H11m2 0h3.5m2 0H22");
}
</style><path class="e4my_fywx"/>`,
		"fallback": "uix-sharp:seasonality",
	});
}

export default Component;
