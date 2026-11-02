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
		"content": `<style>.w3avxrbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12a5 5 0 1 0 10 0a5 5 0 0 0-10 0m2-4V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3m-6 8v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3m-3-6v2h2");
}
</style><path class="w3avxrbxp"/>`,
		"fallback": "coolicons:watch",
	});
}

export default Component;
