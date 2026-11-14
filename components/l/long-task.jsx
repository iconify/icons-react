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
		"content": `<style>.cz_052bqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14M5 21h14M7 3v3.5l5 5.5l5-5.5V3M7 21v-3.5l5-5.5l5 5.5V21");
}
</style><path class="cz_052bqq"/>`,
		"fallback": "uix:long-task",
	});
}

export default Component;
