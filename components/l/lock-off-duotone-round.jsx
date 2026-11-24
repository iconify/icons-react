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

.qptp-ac0t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18.828 19.828A3.97 3.97 0 0 1 16 21H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4ZM14 9h2a4 4 0 0 1 4 4v2Z");
}

.wel0bjp6e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.828 19.828A4 4 0 0 1 16 21H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4m6 0h2a4 4 0 0 1 4 4v2M9.172 4.172A4 4 0 0 1 16 7v2M2 3l19 19");
}
</style><g class="ft5dv1b6b"><path class="qptp-ac0t"/><path class="wel0bjp6e"/></g>`,
		"fallback": "coolicons:lock-off-duotone-round",
	});
}

export default Component;
