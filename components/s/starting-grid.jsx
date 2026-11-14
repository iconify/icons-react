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
		"content": `<style>.lrxqirb1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3h3.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3.5 9.75v-5A1.75 1.75 0 0 1 5.25 3m10 9.5h3.5a1.75 1.75 0 0 1 1.75 1.75v5A1.75 1.75 0 0 1 18.75 21h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="lrxqirb1a"/>`,
		"fallback": "uix:starting-grid",
	});
}

export default Component;
