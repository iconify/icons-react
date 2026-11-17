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
		"content": `<style>.vnpefpbdq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L12 17.5L22 12M2 12V16.5L12 22L22 16.5V12M22 12V7.5L12 2L2 7.5V12M2 7.5L12 13L22 7.5");
}
</style><path class="vnpefpbdq"/>`,
		"fallback": "keyline-icons:layer-boxes-sharp",
	});
}

export default Component;
