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
		"content": `<style>.l5qvuyhzf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19c0-9 5-14 14-14c0 9-5 14-14 14m-1.5 1.5l10-10");
}
</style><path class="l5qvuyhzf"/>`,
		"fallback": "uix:leaf",
	});
}

export default Component;
