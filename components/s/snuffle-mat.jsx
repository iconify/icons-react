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
		"content": `<style>.ykd418s1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11.5h14a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 14A2.5 2.5 0 0 1 5 11.5m-.75 0c0-4.75 3.5-4.75 3.5 0m2.5 0c0-4.75 3.5-4.75 3.5 0m2.5 0c0-4.75 3.5-4.75 3.5 0");
}
</style><path class="ykd418s1p"/>`,
		"fallback": "uix:snuffle-mat",
	});
}

export default Component;
