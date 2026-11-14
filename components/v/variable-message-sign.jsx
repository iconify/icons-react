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
		"content": `<style>.ktw2-nqpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3.5h13.75A2.625 2.625 0 0 1 21.5 6.125v6.25A2.625 2.625 0 0 1 18.875 15H5.125A2.625 2.625 0 0 1 2.5 12.375v-6.25A2.625 2.625 0 0 1 5.125 3.5M8 15v6m8-6v6M6.5 7.5h11M6.5 11h7");
}
</style><path class="ktw2-nqpt"/>`,
		"fallback": "uix:variable-message-sign",
	});
}

export default Component;
