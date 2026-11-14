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
		"content": `<style>.y51xqlb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 16.5V3H12v8l4.5 1.5c1.75.5 2.5 2.25 2.5 4m-13 0h12.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-.5-7l6.5-2");
}
</style><path class="y51xqlb0m"/>`,
		"fallback": "uix:mountaineering-boot",
	});
}

export default Component;
