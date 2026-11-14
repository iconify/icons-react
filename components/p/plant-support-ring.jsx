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
		"content": `<style>.hfjcnqkee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5V7m0 2C9 9 6.5 7 6.5 4c3 0 5.5 2 5.5 5m0-2c0-2.5 2.5-4.5 5.5-4.5C17.5 5 15 7 12 7m-8 8a8 2.5 0 1 0 16 0a8 2.5 0 1 0-16 0m15.5 0v6.5");
}
</style><path class="hfjcnqkee"/>`,
		"fallback": "uix:plant-support-ring",
	});
}

export default Component;
