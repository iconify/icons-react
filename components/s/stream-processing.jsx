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
		"content": `<style>.v2tnl8lut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 7h1.75A2.625 2.625 0 0 1 15.5 9.625v4.75A2.625 2.625 0 0 1 12.875 17h-1.75A2.625 2.625 0 0 1 8.5 14.375v-4.75A2.625 2.625 0 0 1 11.125 7M2 12c1-2 2.25-2 3.25 0s2.25 2 3.25 0m7 0h6m-2.25-2.25L21.5 12l-2.25 2.25");
}
</style><path class="v2tnl8lut"/>`,
		"fallback": "uix:stream-processing",
	});
}

export default Component;
