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
		"content": `<style>.suv0ukb1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3h7L14 9h-4ZM12 9v12.5m-9 0h18m-13.5-11L5 14m11.5-3.5L19 14");
}
</style><path class="suv0ukb1t"/>`,
		"fallback": "uix-sharp:pedestrian-lamp",
	});
}

export default Component;
