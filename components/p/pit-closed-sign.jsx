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
		"content": `<style>.f65dfvv4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5za2 2 0 0 1 2 2v11.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m3.75 1h11a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 19.75 11h-11A1.75 1.75 0 0 1 7 9.25v-1.5A1.75 1.75 0 0 1 8.75 6M11 11l2.5-5m2.5 5l2.5-5");
}
</style><path class="f65dfvv4j"/>`,
		"fallback": "uix:pit-closed-sign",
	});
}

export default Component;
