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
		"content": `<style>.t77crjbil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 19.5c0-9 13-9 13 0Zm6.5-4l5.5-6m-1-2.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 0h.01");
}
</style><path class="t77crjbil"/>`,
		"fallback": "uix:kitchen-thermometer",
	});
}

export default Component;
