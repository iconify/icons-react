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
		"content": `<style>.mczoz5byr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7C8 4.5 16 4.5 21.5 7v7.5c-5.5-2-13.5-2-19 0Zm9.5 6.5V19m-4 0h8");
}
</style><path class="mczoz5byr"/>`,
		"fallback": "uix:monitor-curved",
	});
}

export default Component;
