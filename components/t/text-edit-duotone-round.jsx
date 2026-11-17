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
		"content": `<style>.bup-vfb2v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 15v-3l8-8a1.414 1.414 0 0 1 2 0l1 1a1.414 1.414 0 0 1 0 2l-8 8zm6-9l3 3M3 21l3-3l3 3m4 0h8");
}

.ft5dv1b6b {
  fill: none;
}

.rj09xskav {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 15v-3l8-8a1.415 1.415 0 0 1 2 0l1 1a1.415 1.415 0 0 1 0 2l-8 8Z");
}
</style><g class="ft5dv1b6b"><path class="rj09xskav"/><path class="bup-vfb2v"/></g>`,
		"fallback": "coolicons:text-edit-duotone-round",
	});
}

export default Component;
