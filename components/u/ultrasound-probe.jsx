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
		"content": `<style>.d2foohqwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.75h3.5a1.5 1.5 0 0 1 1.5 1.5V10l1.5 2.25v1.5a1 1 0 0 1-1 1h-7.5a1 1 0 0 1-1-1v-1.5L8.75 10V4.25a1.5 1.5 0 0 1 1.5-1.5m.5 3.25h2.5m-4.5 11.5c2 1.25 4.5 1.25 6.5 0m-8.5 2.25c3.25 1.5 7.25 1.5 10.5 0");
}
</style><path class="d2foohqwm"/>`,
		"fallback": "iconoven:ultrasound-probe",
	});
}

export default Component;
