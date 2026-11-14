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
		"content": `<style>.sf5j-dv4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3q6.993 2.17 9.334 8.992M3 17L13.5 6.5m4.5 8V18m0 3h.01");
}
</style><path class="sf5j-dv4m"/>`,
		"fallback": "uix:mining-alert",
	});
}

export default Component;
