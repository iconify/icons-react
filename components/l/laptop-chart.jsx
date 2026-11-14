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
		"content": `<style>.dxxgjg4_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h15v11h-15Zm-2 14h19M9 12.5V10m3 2.5V8m3 4.5v-3");
}
</style><path class="dxxgjg4_u"/>`,
		"fallback": "uix-sharp:laptop-chart",
	});
}

export default Component;
