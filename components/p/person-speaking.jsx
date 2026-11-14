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
		"content": `<style>.edgyokb7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 8v6.5M4 21l3-6.5l3 6.5m-6-9l3-3l3 3m5-9h4.5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H16l-2.75 2.25V5A2 2 0 0 1 15 3");
}
</style><path class="edgyokb7i"/>`,
		"fallback": "uix:person-speaking",
	});
}

export default Component;
