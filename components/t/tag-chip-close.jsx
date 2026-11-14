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
		"content": `<style>.hwvkqgbmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6.5h9A5.5 5.5 0 0 1 22 12a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 12a5.5 5.5 0 0 1 5.5-5.5M6 12h5.5m3.5-1.75l3.5 3.5m0-3.5l-3.5 3.5");
}
</style><path class="hwvkqgbmn"/>`,
		"fallback": "uix:tag-chip-close",
	});
}

export default Component;
