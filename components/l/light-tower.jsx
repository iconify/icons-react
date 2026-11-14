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
		"content": `<style>.fxdh0x62i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h10v5H5Zm5 5v9m-4.5 4.5L10 17l4.5 4.5M18 3.75l3-1m-3 4.5l3 1");
}
</style><path class="fxdh0x62i"/>`,
		"fallback": "uix-sharp:light-tower",
	});
}

export default Component;
