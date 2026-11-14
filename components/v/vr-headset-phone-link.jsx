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
		"content": `<style>.whi3eonfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4H11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9.5l-.75-1.25h-1.5L6.5 11h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14.125 6.5h.25a2.625 2.625 0 0 1 2.625 2.625v5.75a2.625 2.625 0 0 1-2.625 2.625h-.25A2.625 2.625 0 0 1 16 18.875v-5.75a2.625 2.625 0 0 1 2.625-2.625m-.875 8h2M8 14.5h.01M8 18.25h.01m4.24 0h.01");
}
</style><path class="whi3eonfs"/>`,
		"fallback": "uix:vr-headset-phone-link",
	});
}

export default Component;
