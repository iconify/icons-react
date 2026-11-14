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
		"content": `<style>.cfg0sda9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.077 5.551l4.25-1.771a1.75 1.75 0 0 1 1.346 0l4.654 1.94a1.75 1.75 0 0 0 1.346 0l2.904-1.21A1.75 1.75 0 0 1 21 6.125V10.5a1.75 1.75 0 0 1-1.75 1.75H14A1.75 1.75 0 0 0 12.25 14v3.509a1.196 1.196 0 0 1-1.625 1.116l-.971-.373a1.75 1.75 0 0 0-1.301.018l-2.93 1.22A1.75 1.75 0 0 1 3 17.875V7.167a1.75 1.75 0 0 1 1.077-1.616M9 3.5V18m6-12v6.25m.5 3.25l5 5m0-5l-5 5");
}
</style><path class="cfg0sda9o"/>`,
		"fallback": "uix:map-x",
	});
}

export default Component;
