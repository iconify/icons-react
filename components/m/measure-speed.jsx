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
		"content": `<style>.ltx94cbku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 17a8.5 8.5 0 1 1 14.5-6M11 11l4.5-4.5m0 9.5l2.75 2.75l-2.75 2.75m3.25-5.5l2.75 2.75l-2.75 2.75");
}
</style><path class="ltx94cbku"/>`,
		"fallback": "uix-sharp:measure-speed",
	});
}

export default Component;
