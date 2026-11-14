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
		"content": `<style>.rs14hkifr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6v15.5M6 6h14.5m-3-3l3 3l-3 3M3 3l3 3l-3 3m5 3h8m-7.5 9.5h7");
}
</style><path class="rs14hkifr"/>`,
		"fallback": "uix:pin-weather-station",
	});
}

export default Component;
