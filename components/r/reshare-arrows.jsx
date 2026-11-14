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
		"content": `<style>.ife2wobub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5V9a2 2 0 0 1 2-2h15M18 4.5L20.5 7L18 9.5m2.5 2V15a2 2 0 0 1-2 2h-15M6 14.5L3.5 17L6 19.5");
}
</style><path class="ife2wobub"/>`,
		"fallback": "uix:reshare-arrows",
	});
}

export default Component;
