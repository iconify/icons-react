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
		"content": `<style>.pi0ttlimn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5c0-3 4-5 9-5s9 2 9 5V15a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-1.5a11.17 11.17 0 0 0-7 0V15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><path class="pi0ttlimn"/>`,
		"fallback": "uix:phone-handset",
	});
}

export default Component;
