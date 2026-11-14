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
		"content": `<style>.btescfqgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 5h9.75A2.625 2.625 0 0 1 19.5 7.625v1.75A2.625 2.625 0 0 1 16.875 12h-9.75A2.625 2.625 0 0 1 4.5 9.375v-1.75A2.625 2.625 0 0 1 7.125 5M9.5 5V2.5h5V5m-5 7v9.5m5-9.5v9.5M8 8.5h8");
}
</style><path class="btescfqgv"/>`,
		"fallback": "uix:milepost",
	});
}

export default Component;
