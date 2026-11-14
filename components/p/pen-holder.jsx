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
		"content": `<style>.b-1wkphlk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11h13v8a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2ZM9 11L8 3.5m4 7.5V2.5m3 8.5l1-7.5");
}
</style><path class="b-1wkphlk"/>`,
		"fallback": "uix:pen-holder",
	});
}

export default Component;
