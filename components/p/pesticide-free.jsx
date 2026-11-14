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
		"content": `<style>.dsntq549d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5c0-9 6-15 15-15c0 9-6 15-15 15Zm0 0L10 10m8.5 3.5l3 5a3 3 0 0 1-6 0Z");
}
</style><path class="dsntq549d"/>`,
		"fallback": "uix-sharp:pesticide-free",
	});
}

export default Component;
