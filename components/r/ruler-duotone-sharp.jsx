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

.m0a1wgb7x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l6-6l6 6L9 21l-6-6zm-4 4l2 2m2-6l2 2m2-6l2 2");
}

.ncw8sbc-o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14.293 2.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z");
}
</style><g class="ft5dv1b6b"><path class="ncw8sbc-o"/><path class="m0a1wgb7x"/></g>`,
		"fallback": "coolicons:ruler-duotone-sharp",
	});
}

export default Component;
