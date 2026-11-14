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
		"content": `<style>.dn3jwwb7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m.5-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-7.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9.5-12V10m-5.75 7.25l3.75-3m9-.75v4m0 3h.01");
}
</style><path class="dn3jwwb7u"/>`,
		"fallback": "uix:network-error",
	});
}

export default Component;
