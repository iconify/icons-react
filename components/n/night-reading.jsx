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
		"content": `<style>.z-vgf809b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13c-2-1.5-5.5-2-9.5-1.5V20c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5v-8.5c-4-.5-7.5 0-9.5 1.5m0 0v8.5m3-19a3.5 3.5 0 1 0 0 6a3.5 3.5 0 0 1 0-6");
}
</style><path class="z-vgf809b"/>`,
		"fallback": "uix:night-reading",
	});
}

export default Component;
