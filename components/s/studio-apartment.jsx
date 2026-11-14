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
		"content": `<style>.w3kz0wsxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5.5v15M3 17h8.6M3 12.5h12.8M7 9.5h2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 9 12.5H7A1.5 1.5 0 0 1 5.5 11A1.5 1.5 0 0 1 7 9.5m7.25 6.75h7.5m-6.75 0v3.5a1.75 1.75 0 0 0 1.75 1.75h2.5A1.75 1.75 0 0 0 21 19.75v-3.5m-3-2V15");
}
</style><path class="w3kz0wsxo"/>`,
		"fallback": "uix:studio-apartment",
	});
}

export default Component;
