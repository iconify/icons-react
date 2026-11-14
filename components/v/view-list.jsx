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
		"content": `<style>.gtwbj6bha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 4h.5A1.75 1.75 0 0 1 7.5 5.75v.5A1.75 1.75 0 0 1 5.75 8h-.5A1.75 1.75 0 0 1 3.5 6.25v-.5A1.75 1.75 0 0 1 5.25 4M11 6h9.5M5.25 10h.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 5.75 14h-.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 5.25 10M11 12h9.5M5.25 16h.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 5.75 20h-.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 5.25 16M11 18h9.5");
}
</style><path class="gtwbj6bha"/>`,
		"fallback": "uix:view-list",
	});
}

export default Component;
