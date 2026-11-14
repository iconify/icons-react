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
		"content": `<style>.bkh-v-pde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h14A1.5 1.5 0 0 1 19.5 4A1.5 1.5 0 0 1 18 5.5H4A1.5 1.5 0 0 1 2.5 4A1.5 1.5 0 0 1 4 2.5m-.5 3v13h9m6-6.8V5.5m-7.5 13v3m7-7V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="bkh-v-pde"/>`,
		"fallback": "uix:roller-blind-down",
	});
}

export default Component;
