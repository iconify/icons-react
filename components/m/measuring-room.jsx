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
		"content": `<style>.yzf2pbx8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.5h12.5A1.75 1.75 0 0 1 20 4.25v9.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 13.75v-9.5A1.75 1.75 0 0 1 5.75 2.5M4 20h16M6 18.25L4 20l2 1.75m12-3.5L20 20l-2 1.75");
}
</style><path class="yzf2pbx8g"/>`,
		"fallback": "uix:measuring-room",
	});
}

export default Component;
