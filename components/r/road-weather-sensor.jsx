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
		"content": `<style>.pjns5pbnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 3h4.5A1.75 1.75 0 0 1 16 4.75v2.5A1.75 1.75 0 0 1 14.25 9h-4.5A1.75 1.75 0 0 1 8 7.25v-2.5A1.75 1.75 0 0 1 9.75 3M12 9v9.5m-9 0h18m-18 3h18M12 6h.01");
}
</style><path class="pjns5pbnn"/>`,
		"fallback": "uix:road-weather-sensor",
	});
}

export default Component;
