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
		"content": `<style>.k--123b0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11v6.5A3.5 3.5 0 0 0 8.5 21h7a3.5 3.5 0 0 0 3.5-3.5V11Zm-.5-2C4.5 6.75 8 5.5 12 5.5s7.5 1.25 7.5 3.5Zm-2 3.75H5m14 0h2.5M12 5.5V3.25");
}
</style><path class="k--123b0e"/>`,
		"fallback": "uix:kitchen",
	});
}

export default Component;
