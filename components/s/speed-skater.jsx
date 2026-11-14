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
		"content": `<style>.nng7zzbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.75 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M14 9l-4.5 3.5l4.5 3l-.5 4m-4-7l-5.5 6M14 9L6.5 7.75M11 19.5h6m-13.5-8H6");
}
</style><path class="nng7zzbiq"/>`,
		"fallback": "uix:speed-skater",
	});
}

export default Component;
