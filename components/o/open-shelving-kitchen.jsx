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
		"content": `<style>.ygyfav30u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18M3 20h18M3.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m12.375-3h.25a2.625 2.625 0 0 1 2.625 2.625v1.25A2.625 2.625 0 0 1 16.125 11h-.25a2.625 2.625 0 0 1-2.625-2.625v-1.25A2.625 2.625 0 0 1 15.875 4.5M7 17h10l-1 3H8Z");
}
</style><path class="ygyfav30u"/>`,
		"fallback": "uix:open-shelving-kitchen",
	});
}

export default Component;
