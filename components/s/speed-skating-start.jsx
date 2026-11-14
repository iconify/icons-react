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
		"content": `<style>.bt93uebnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 6.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M13 10l-6 1.5l4 3.75L9.5 19M7 11.5L3.5 18m9.5-8l1.5 4.75M20 12.5v8");
}
</style><path class="bt93uebnq"/>`,
		"fallback": "uix:speed-skating-start",
	});
}

export default Component;
