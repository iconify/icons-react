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

.inexpkbns {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a4 4 0 0 1 8 0");
}

.q9e8f_mgh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17a4 4 0 1 1 8 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4-4V8c0-4 6-5 7-2l5 15m-3 0h5");
}
</style><g class="ft5dv1b6b"><path class="inexpkbns"/><path class="q9e8f_mgh"/></g>`,
		"fallback": "coolicons:vacuum-cleaner-duotone-round",
	});
}

export default Component;
