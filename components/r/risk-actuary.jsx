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
		"content": `<style>.p4nfub6ve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.672 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c2.123 0 3.997.562 5.341 1.529M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m9 14.5V19m2.75 2.5V17M21 21.5v-7");
}
</style><path class="p4nfub6ve"/>`,
		"fallback": "uix:risk-actuary",
	});
}

export default Component;
