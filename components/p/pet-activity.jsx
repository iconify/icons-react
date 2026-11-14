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
		"content": `<style>.en62hfxec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-17.75 0V18h3.5v3.5m2.75 0v-6.25h3.5v6.25m3 0v-8.75H20v8.75M15.75 8.25a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0M15.5 4.5h.01M18.25 3h.01M21 4.5h.01");
}
</style><path class="en62hfxec"/>`,
		"fallback": "uix:pet-activity",
	});
}

export default Component;
