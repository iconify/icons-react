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
		"content": `<style>.mx5jw2b6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 13h13.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 18.875 20H5.125A2.625 2.625 0 0 1 2.5 17.375v-1.75A2.625 2.625 0 0 1 5.125 13M7 13v3m5-3v4m5-4v3M3 7h18M5.5 4.5L3 7l2.5 2.5m13-5L21 7l-2.5 2.5");
}
</style><path class="mx5jw2b6e"/>`,
		"fallback": "uix:measure-width",
	});
}

export default Component;
