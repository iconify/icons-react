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
		"content": `<style>.ps1yvnb-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 2.5h12.75A2.625 2.625 0 0 1 21 5.125v2.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 7.875v-2.75A2.625 2.625 0 0 1 5.625 2.5m0 11h12.75A2.625 2.625 0 0 1 21 16.125v2.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.875v-2.75A2.625 2.625 0 0 1 5.625 13.5");
}
</style><path class="ps1yvnb-e"/>`,
		"fallback": "uix:over-under-3d",
	});
}

export default Component;
