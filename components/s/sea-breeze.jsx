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
		"content": `<style>.oirb_t35x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8h12.5a2.5 2.5 0 0 0 0-5M3 12h10a2.5 2.5 0 0 1 0 5M3 19.25q1.75-1.5 3.5 0t3.5 0m3.5.5h8m-2-2l2 2l-2 2");
}
</style><path class="oirb_t35x"/>`,
		"fallback": "uix-sharp:sea-breeze",
	});
}

export default Component;
