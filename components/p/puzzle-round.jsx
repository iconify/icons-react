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
		"content": `<style>.ezpr1gb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 7h1a4 4 0 0 1 4 4v1a2.236 2.236 0 1 0 0 4v1a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-1a2.236 2.236 0 1 1 0-4v-1a4 4 0 0 1 4-4h1a2.236 2.236 0 1 1 4 0");
}
</style><path class="ezpr1gb4v"/>`,
		"fallback": "coolicons:puzzle-round",
	});
}

export default Component;
