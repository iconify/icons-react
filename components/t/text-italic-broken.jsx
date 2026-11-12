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
		"content": `<style>.eoopxowgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 22H9M9 22H15M9 22L11.4 14M9 2H15M15 2H21M15 2L12.6 10");
}
</style><path class="eoopxowgv"/>`,
		"fallback": "solar:text-italic-broken",
	});
}

export default Component;
