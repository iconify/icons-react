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
		"content": `<style>.vkkwew_kt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7c1.75-2.25 4.25-2.25 6 0s4.25 2.25 6 0s4.25-2.25 6 0M3 13c1.75-2.25 4.25-2.25 6 0s4.25 2.25 6 0s4.25-2.25 6 0M3 19c1.75-2.25 4.25-2.25 6 0s4.25 2.25 6 0s4.25-2.25 6 0");
}
</style><path class="vkkwew_kt"/>`,
		"fallback": "uix:pin-flood",
	});
}

export default Component;
