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
		"content": `<style>.dz7nz_b7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5-6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m5-6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5.75 13.5l2.5-3m2.5 0l2.5 3m2.5 0l2.5-3");
}
</style><path class="dz7nz_b7o"/>`,
		"fallback": "uix:molecule-chain",
	});
}

export default Component;
