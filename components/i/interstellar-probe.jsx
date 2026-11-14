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
		"content": `<style>.a5s4o5big {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 14.5h1.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75M4.5 15H8a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8 19H4.5A1.5 1.5 0 0 1 3 17.5v-1A1.5 1.5 0 0 1 4.5 15M16 15h3.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H16a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 16 15M8.5 9q3.5 4 7 0M12 11v3.5M17.75 7L21 3.75m-1.5 6.5l2-2");
}
</style><path class="a5s4o5big"/>`,
		"fallback": "uix:interstellar-probe",
	});
}

export default Component;
