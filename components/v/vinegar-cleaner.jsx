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
		"content": `<style>.z6pk4ubim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10h3a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-4.5A3.5 3.5 0 0 1 7 10m-1 0V3.5h8.5v3H11V10m-7.5 5h10m2.5 6.5c0-4.75 2.25-6.5 5.75-6.5c0 4-2 6.5-5.75 6.5m0 0l2.75-3.25");
}
</style><path class="z6pk4ubim"/>`,
		"fallback": "uix:vinegar-cleaner",
	});
}

export default Component;
