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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.i8-k-2h-m {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19.414 20.414c-.378.378-.88.589-1.414.586H6a2.003 2.003 0 0 1-2-2v-8a2.003 2.003 0 0 1 2-2h2ZM14 9h4a2.003 2.003 0 0 1 2 2v4Z");
}

.ta4mgccjr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19.414 20.414A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m6 0h4a2 2 0 0 1 2 2v4M9.172 4.172A4 4 0 0 1 16 7v2M2 3l19 19");
}
</style><g class="ft5dv1b6b"><path class="i8-k-2h-m"/><path class="ta4mgccjr"/></g>`,
		"fallback": "coolicons:lock-off-duotone",
	});
}

export default Component;
