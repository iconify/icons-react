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

.h03p2vbec {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a6 6 0 0 1-6 6v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a5 5 0 0 1-5-5Zm0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6");
}

.obflt0bqz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 12V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6h10a6 6 0 0 1-6 6v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a5 5 0 0 1-5-5");
}
</style><g class="ft5dv1b6b"><path class="obflt0bqz"/><path class="h03p2vbec"/></g>`,
		"fallback": "coolicons:toilet-duotone",
	});
}

export default Component;
