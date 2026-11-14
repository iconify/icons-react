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
		"content": `<style>.ne_g99b1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 13h7.5a2.75 2.75 0 0 1 2.75 2.75a2.75 2.75 0 0 1-2.75 2.75h-7.5a2.75 2.75 0 0 1-2.75-2.75A2.75 2.75 0 0 1 8.25 13M8 18.5V21m8-2.5V21m-8.5-8L9 9.5h6l1.5 3.5m-13-3l3-7.5m14 7.5l-3-7.5");
}
</style><path class="ne_g99b1x"/>`,
		"fallback": "uix:traffic-model",
	});
}

export default Component;
