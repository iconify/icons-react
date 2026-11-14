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
		"content": `<style>.mzmv1ka2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h16a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 2.75m2.625 3h10.75A2.625 2.625 0 0 1 20 8.375v10.5a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 18.875v-10.5A2.625 2.625 0 0 1 6.625 5.75M4 13h16m-8 0v8.5");
}
</style><path class="mzmv1ka2t"/>`,
		"fallback": "uix:roller-blind",
	});
}

export default Component;
