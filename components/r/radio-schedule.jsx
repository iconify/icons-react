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
		"content": `<style>.fr882ht0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v8.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125v-8.75A4.375 4.375 0 0 1 6.875 4M8 2.5v3m8-3v3M2.5 9h19M12 9v12.5m-9.5-6.25h19");
}
</style><path class="fr882ht0x"/>`,
		"fallback": "uix:radio-schedule",
	});
}

export default Component;
