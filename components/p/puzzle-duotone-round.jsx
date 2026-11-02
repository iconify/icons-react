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

.hzjx6ibud {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 7h1a4 4 0 0 1 4 4v1a2.236 2.236 0 1 0 0 4v1a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-1a2.236 2.236 0 1 1 0-4v-1a4 4 0 0 1 4-4h1a2.236 2.236 0 1 1 4 0");
}

.i2fx_ebhl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 7a4 4 0 0 1 4 4v1a2.235 2.235 0 1 0 0 4v1a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-1a2.235 2.235 0 1 1 0-4v-1a4 4 0 0 1 4-4h1a2.235 2.235 0 1 1 4 0Z");
}
</style><g class="ft5dv1b6b"><path class="i2fx_ebhl"/><path class="hzjx6ibud"/></g>`,
		"fallback": "coolicons:puzzle-duotone-round",
	});
}

export default Component;
