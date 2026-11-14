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
		"content": `<style>.hu62vcbgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 14h10.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 15.75 18H5.25a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 5.25 14m-.75 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 14l10-9m0 0v5");
}
</style><path class="hu62vcbgf"/>`,
		"fallback": "uix:mobile-crane",
	});
}

export default Component;
