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
		"content": `<style>.qzwh_bb6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h2.75A2.625 2.625 0 0 1 10.5 6.625v1.75A2.625 2.625 0 0 1 7.875 11h-2.75A2.625 2.625 0 0 1 2.5 8.375v-1.75A2.625 2.625 0 0 1 5.125 4m11 9h2.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 18.875 20h-2.75a2.625 2.625 0 0 1-2.625-2.625v-1.75A2.625 2.625 0 0 1 16.125 13M13 7.5h5m-2-2l2 2l-2 2m-5 7H6m2-2l-2 2l2 2");
}
</style><path class="qzwh_bb6a"/>`,
		"fallback": "uix:transfer-between-accounts",
	});
}

export default Component;
