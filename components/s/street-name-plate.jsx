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
		"content": `<style>.v6y_vdbsd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3.5h13.75A2.625 2.625 0 0 1 21.5 6.125v3.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 9.875v-3.75A2.625 2.625 0 0 1 5.125 3.5m6.875 9V21m-3 0h6M6.5 8h11");
}
</style><path class="v6y_vdbsd"/>`,
		"fallback": "uix:street-name-plate",
	});
}

export default Component;
