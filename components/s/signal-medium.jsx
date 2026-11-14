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
		"content": `<style>.iwo_tobbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 12.5h2A1.75 1.75 0 0 1 10 14.25v4.5a1.75 1.75 0 0 1-1.75 1.75h-2a1.75 1.75 0 0 1-1.75-1.75v-4.5a1.75 1.75 0 0 1 1.75-1.75m9.5-9h2a1.75 1.75 0 0 1 1.75 1.75v13.5a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 14 18.75V5.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="iwo_tobbq"/>`,
		"fallback": "uix:signal-medium",
	});
}

export default Component;
