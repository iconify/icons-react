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
		"content": `<style>.s4t4nmbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.625 5.5h4.75A2.625 2.625 0 0 1 17 8.125v1.75a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 7 9.875v-1.75A2.625 2.625 0 0 1 9.625 5.5m.375 0V3h4v2.5m-11.5 7h19m-17 0v3m15-3v3m-11 0l1 5.5h6");
}
</style><path class="s4t4nmbnu"/>`,
		"fallback": "uix:luggage-rack-train",
	});
}

export default Component;
