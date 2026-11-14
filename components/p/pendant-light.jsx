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
		"content": `<style>.y56-uubby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V7m-7 6a7 6 0 0 1 14 0Zm7 3v5m-5-5.25L4.5 20M17 15.75L19.5 20");
}
</style><path class="y56-uubby"/>`,
		"fallback": "uix:pendant-light",
	});
}

export default Component;
