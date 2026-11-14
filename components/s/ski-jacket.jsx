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
		"content": `<style>.y9pivub6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.5L4.5 8l-2 10H6l1-4.5V21h10v-7.5l1 4.5h3.5l-2-10l-4-1.5a3.5 3.5 0 0 0-7 0M12 10v11");
}
</style><path class="y9pivub6j"/>`,
		"fallback": "uix:ski-jacket",
	});
}

export default Component;
