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
		"content": `<style>.dgx3ldbwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M6.5 14a3.5 4.25 0 1 0 7 0a3.5 4.25 0 1 0-7 0m6.25 2.75L17 21m-7.75-9.75l3.5 3.5m-5.5-1.5l3.5 3.5");
}
</style><path class="dgx3ldbwk"/>`,
		"fallback": "uix:sports-store",
	});
}

export default Component;
