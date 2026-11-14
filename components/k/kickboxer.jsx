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
		"content": `<style>.ywhee70vz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2.75 4.75L8.5 14.5m0 0l-3 7m3-7l12-5.5m-17 3.5l4-2l3.75-2");
}
</style><path class="ywhee70vz"/>`,
		"fallback": "uix:kickboxer",
	});
}

export default Component;
