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
		"content": `<style>.cyjploo2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 3h3A2.5 2.5 0 0 1 16 5.5A2.5 2.5 0 0 1 13.5 8h-3A2.5 2.5 0 0 1 8 5.5A2.5 2.5 0 0 1 10.5 3M10 8v12m4-12v12M3 11.5h4m10 0h4M5.5 16h.01m12.99 0h.01M5.5 20h.01m12.99 0h.01");
}
</style><path class="cyjploo2x"/>`,
		"fallback": "uix:soil-sensor",
	});
}

export default Component;
