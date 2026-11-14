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
		"content": `<style>.bez2en1jw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15h10a3 3 0 0 1 3 3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5 0V9.5m-3.5-3a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M16 18h.01");
}
</style><path class="bez2en1jw"/>`,
		"fallback": "uix:joystick",
	});
}

export default Component;
