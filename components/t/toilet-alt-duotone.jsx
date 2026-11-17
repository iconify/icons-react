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

.lg1r--u0b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5m2 0V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6");
}

.vf78-kbgj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6h2a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5Z");
}
</style><g class="ft5dv1b6b"><path class="vf78-kbgj"/><path class="lg1r--u0b"/></g>`,
		"fallback": "coolicons:toilet-alt-duotone",
	});
}

export default Component;
