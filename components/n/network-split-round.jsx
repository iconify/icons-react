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
		"content": `<style>.j93j32p5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 2v5m-6 8v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4M3 17l3 3l3-3m6 0l3 3l3-3");
}
</style><path class="j93j32p5x"/>`,
		"fallback": "coolicons:network-split-round",
	});
}

export default Component;
