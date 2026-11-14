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
		"content": `<style>.ccr_6_bez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 12h14.5A1.75 1.75 0 0 1 21 13.75v6a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 19.75v-6A1.75 1.75 0 0 1 4.75 12m3-9h8.5A1.75 1.75 0 0 1 18 4.75v5.5A1.75 1.75 0 0 1 16.25 12h-8.5A1.75 1.75 0 0 1 6 10.25v-5.5A1.75 1.75 0 0 1 7.75 3M12 12v3.5M12 3v3.5m-6 12h3");
}
</style><path class="ccr_6_bez"/>`,
		"fallback": "uix:storage-room",
	});
}

export default Component;
