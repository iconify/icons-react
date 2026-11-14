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
		"content": `<style>.tk4dcpgur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6h5L9.25 2.5h-2.5ZM8 6v15.5m-2.5 0h5M8 9h10m-7 0v10l3.5-2.5L18 19V9");
}
</style><path class="tk4dcpgur"/>`,
		"fallback": "uix-sharp:light-column-banner",
	});
}

export default Component;
