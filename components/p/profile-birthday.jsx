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
		"content": `<style>.q-12p8z7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 14h12.75A2.625 2.625 0 0 1 21 16.625v2.25a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.875v-2.25A2.625 2.625 0 0 1 5.625 14m3-5.5h6.75A2.625 2.625 0 0 1 18 11.125v.25A2.625 2.625 0 0 1 15.375 14h-6.75A2.625 2.625 0 0 1 6 11.375v-.25A2.625 2.625 0 0 1 8.625 8.5M12 5.5v3m0-6h.01");
}
</style><path class="q-12p8z7t"/>`,
		"fallback": "uix:profile-birthday",
	});
}

export default Component;
