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
		"content": `<style>.ozdgweb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-3.25 3v-3h-1a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2m1.75 4H12m-5.5 3H10m7.5-4.25a4.5 4.5 0 0 1 0 5m2.25-7a8 8 0 0 1 0 9");
}
</style><path class="ozdgweb3r"/>`,
		"fallback": "iconoven:voice-over",
	});
}

export default Component;
