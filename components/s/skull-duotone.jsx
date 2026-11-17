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
		"content": `<style>.cnm7vt5tf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 16a7.81 7.81 0 1 1 12 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.p6ocu1kfr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 16a7.81 7.81 0 1 1 12 0v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm4 2v3m4-3v3m-6-9a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><g class="ft5dv1b6b"><path class="cnm7vt5tf"/><path class="p6ocu1kfr"/></g>`,
		"fallback": "coolicons:skull-duotone",
	});
}

export default Component;
