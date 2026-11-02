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
		"content": `<style>.qggj4mb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m6 0h2a2 2 0 0 1 2 2v2m0 0l4-2c.919-.46 2 .081 2 1v6c0 .284.17-.194 0 0M2 3l19 19");
}
</style><path class="qggj4mb7b"/>`,
		"fallback": "coolicons:video-off",
	});
}

export default Component;
