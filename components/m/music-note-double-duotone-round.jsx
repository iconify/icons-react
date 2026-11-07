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
		"content": `<style>.e967occqz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 0V8c0-1.838 2.162-2.919 4-2l2 1m-6 2l4 2");
}

.ft5dv1b6b {
  fill: none;
}

.j-wf5hp6d {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 17a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="ft5dv1b6b"><path class="j-wf5hp6d"/><path class="e967occqz"/></g>`,
		"fallback": "coolicons:music-note-double-duotone-round",
	});
}

export default Component;
