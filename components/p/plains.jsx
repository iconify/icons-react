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
		"content": `<style>.ie6x0xbkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19M4.5 6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m.5 9.5h6.5m3 0H19m-10.5 4H16");
}
</style><path class="ie6x0xbkx"/>`,
		"fallback": "uix:plains",
	});
}

export default Component;
