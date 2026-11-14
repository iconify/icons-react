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
		"content": `<style>.zg2_i9bli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h11a5.5 3.5 0 0 1-11 0m8.393 6.947a4.5 4.5 0 0 1-5.786 0m8.035 2.681a8 8 0 0 1-10.284 0m12.534 2.682a11.5 11.5 0 0 1-14.784 0");
}
</style><path class="zg2_i9bli"/>`,
		"fallback": "uix:presence-sensor",
	});
}

export default Component;
