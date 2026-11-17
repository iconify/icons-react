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
		"content": `<style>.cpidm_b0s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 13v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h4a7.07 7.07 0 0 0 2 6c2.003 2.001 5.283 3.162 8 2");
}

.ft5dv1b6b {
  fill: none;
}

.p2a3gxecu {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 13v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h4M4 7l3 3c.64.64 1.72 1 3 1h3m2-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="ft5dv1b6b"><path class="cpidm_b0s"/><path class="p2a3gxecu"/></g>`,
		"fallback": "coolicons:mail-dot-duotone-round",
	});
}

export default Component;
