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
		"content": `<style>.twib-kasm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.195 5.29l2.918-2.139a1.5 1.5 0 0 1 1.774 0l2.918 2.139A1.5 1.5 0 0 1 14.918 8H9.082a1.5 1.5 0 0 1-.887-2.71M5.5 8v10.5M18.5 8v10.5M4 21.5v-3h16v3m-17.5 0h19M9 18.5V11h6v7.5m-1.75-3.75h.01");
}
</style><path class="twib-kasm"/>`,
		"fallback": "uix:porch",
	});
}

export default Component;
