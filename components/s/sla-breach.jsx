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
		"content": `<style>.zvlf9xbox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h11M4 21h11M5.5 3v2.5q0 3.5 4 6.5t4 6.5V21m0-18v2.5q0 3.5-4 6.5t-4 6.5V21M18 14.75v3.5M18 21h.01");
}
</style><path class="zvlf9xbox"/>`,
		"fallback": "uix:sla-breach",
	});
}

export default Component;
