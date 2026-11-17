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
		"content": `<style>.bpxm-cc-t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 10V4a6 6 0 0 1 6 6a8.062 8.062 0 0 1-14 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.g6swiccwd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 10h14a8.062 8.062 0 0 1-14 0m8 0V4a6 6 0 0 1 6 6M3 5h2l2 5m3 3v4m8-4v4M8 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="ft5dv1b6b"><path class="bpxm-cc-t"/><path class="g6swiccwd"/></g>`,
		"fallback": "coolicons:stroller-duotone",
	});
}

export default Component;
