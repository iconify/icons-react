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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfy8rmb1d {
  d: path("M3.75 9.5a5.75 5.75 0 0 0 11.5 0M9.5 15.25V21m-3 0h6m3-3.5V20m3-4.5v6m3-4V20");
}

.to1asja8w {
  d: path("M9.5 2.5za3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="to1asja8w"/><path class="lfy8rmb1d"/></g>`,
		"fallback": "uix:microphone-lab",
	});
}

export default Component;
