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
		"content": `<style>.lke01-b1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19M4 19c4-2 5-10 8-10s4 8 8 10m-8-4.5h.01M4.5 14h.01m14.99 0h.01M12 4.75h.01");
}
</style><path class="lke01-b1i"/>`,
		"fallback": "uix:metal-powder",
	});
}

export default Component;
