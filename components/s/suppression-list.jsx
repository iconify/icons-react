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
		"content": `<style>.eyz30tksn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h3.3m6.4 0H21M3 12h5.8m6.4 0H21M3 16.5h8.3m6.4 0H21M7 3l10 18");
}
</style><path class="eyz30tksn"/>`,
		"fallback": "uix:suppression-list",
	});
}

export default Component;
