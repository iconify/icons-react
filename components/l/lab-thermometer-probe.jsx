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
		"content": `<style>.udivu6bzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.25 15.25l4.5-4.5a3.18 3.18 0 0 1 4.5 4.5l-4.5 4.5a3.18 3.18 0 0 1-4.5-4.5m9-4.5L20.5 3.5M7 17l3.5-3.5");
}
</style><path class="udivu6bzd"/>`,
		"fallback": "uix:lab-thermometer-probe",
	});
}

export default Component;
