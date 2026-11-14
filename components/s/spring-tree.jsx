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
		"content": `<style>.g2c6z2b2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5v-15m0 8.5L6.5 9.5M12 12l5.5-5.5M3.75 8a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0m14-3a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0m-7-.75a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0");
}
</style><path class="g2c6z2b2m"/>`,
		"fallback": "uix:spring-tree",
	});
}

export default Component;
