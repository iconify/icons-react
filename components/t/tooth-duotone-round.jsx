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

.hnx_ofxzr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 4c.845-.738 1.898-1 3-1a4 4 0 0 1 4 4c0 6-1 6-1 12a2 2 0 1 1-4 0v-1a2 2 0 1 0-4 0v1a2 2 0 1 1-4 0c0-6-1-6-1-12a4 4 0 0 1 4-4c1.102 0 2.155.262 3 1");
}

.l-nbotb_e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4c-.8-.7-1.8-1-3-1a4 4 0 0 0-4 4c0 6 1 6 1 12a2 2 0 1 0 4 0v-1a2 2 0 1 1 4 0v1a2 2 0 1 0 4 0c0-6 1-6 1-12a4 4 0 0 0-4-4c-1.2 0-2.2.3-3 1");
}
</style><g class="ft5dv1b6b"><path class="hnx_ofxzr"/><path class="l-nbotb_e"/></g>`,
		"fallback": "coolicons:tooth-duotone-round",
	});
}

export default Component;
