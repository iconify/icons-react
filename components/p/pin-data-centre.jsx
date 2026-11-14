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
		"content": `<style>.cix13btzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3.5h12.75A2.625 2.625 0 0 1 21 6.125v1.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 7.875v-1.75A2.625 2.625 0 0 1 5.625 3.5m0 10h12.75A2.625 2.625 0 0 1 21 16.125v1.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 17.875v-1.75A2.625 2.625 0 0 1 5.625 13.5M7 7h.01M11 7h6M7 17h.01M11 17h6");
}
</style><path class="cix13btzn"/>`,
		"fallback": "uix:pin-data-centre",
	});
}

export default Component;
