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
		"content": `<style>.va3k4xeoj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 11.25v-1a4 4 0 0 1 4-4h11.5M16.5 3l3.25 3.25L16.5 9.5m3.25 3.25v1a4 4 0 0 1-4 4H4.25M7.5 21l-3.25-3.25L7.5 14.5");
}
</style><path class="va3k4xeoj"/>`,
		"fallback": "iconoven:repeat-off",
	});
}

export default Component;
