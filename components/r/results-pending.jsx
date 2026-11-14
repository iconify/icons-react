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
		"content": `<style>.h5g02t4ex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12m-12 19h12M7.5 2.5v3c0 3 4.5 4.5 4.5 6.5s-4.5 3.5-4.5 6.5v3m9-19v3c0 3-4.5 4.5-4.5 6.5s4.5 3.5 4.5 6.5v3");
}
</style><path class="h5g02t4ex"/>`,
		"fallback": "uix:results-pending",
	});
}

export default Component;
