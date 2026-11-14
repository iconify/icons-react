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
		"content": `<style>.naw5b8k2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 6.5a2 2 0 1 1 0-4a2 2 0 1 1 0 4V9a3 3 0 1 1 0 6a3 3 0 1 1 0-6m0 6v1a5.5 2.75 0 1 1 0 5.5a5.5 2.75 0 1 1 0-5.5m3-4H19m0-1.5v3");
}
</style><path class="naw5b8k2e"/>`,
		"fallback": "uix:kipps-apparatus",
	});
}

export default Component;
