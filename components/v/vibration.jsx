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
		"content": `<style>.rv33nob4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 3h1A3.5 3.5 0 0 1 16 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 8 17.5v-11A3.5 3.5 0 0 1 11.5 3m-7 4L3 9.5L4.5 12L3 14.5L4.5 17m15-10L21 9.5L19.5 12l1.5 2.5l-1.5 2.5");
}
</style><path class="rv33nob4j"/>`,
		"fallback": "uix:vibration",
	});
}

export default Component;
