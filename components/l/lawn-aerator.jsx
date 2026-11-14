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
		"content": `<style>.xywrbpp1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 0H16M11.5 18l1.25 2M7.5 18l-1.25 2m-.75-5.5H3M7.5 11L6.25 9m3.25 5.5l6-10.5M13 2.5l5 3");
}
</style><path class="xywrbpp1w"/>`,
		"fallback": "uix-sharp:lawn-aerator",
	});
}

export default Component;
