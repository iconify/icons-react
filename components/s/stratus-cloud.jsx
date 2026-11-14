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
		"content": `<style>.r_nrp505n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19c0-3-2-4.5-5-4.5c-1.5-2.5-7-3-9 0c-3 0-5 1.75-5 4.5M6 18h12");
}
</style><path class="r_nrp505n"/>`,
		"fallback": "uix:stratus-cloud",
	});
}

export default Component;
