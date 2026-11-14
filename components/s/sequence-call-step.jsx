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
		"content": `<style>.dbwku3s_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5H7l1.5 3.75l-1.75 1.5c.75 2 2.5 3.75 4.5 4.5l1.5-1.75L16.5 12v2a2 2 0 0 1-2 2C8 15.5 3 10.5 2.5 4.5a2 2 0 0 1 2-2m12 19.25v-2h2v-2h2v-2H22");
}
</style><path class="dbwku3s_a"/>`,
		"fallback": "uix:sequence-call-step",
	});
}

export default Component;
