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
		"content": `<style>.k9brrmc1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 5h-4a7 7 0 0 0 0 14h4v-4.5h-4a2.5 2.5 0 0 1 0-5h4Zm3 3q2.5 4 0 8m3-10q3 6 0 12");
}
</style><path class="k9brrmc1m"/>`,
		"fallback": "uix:magnetism",
	});
}

export default Component;
