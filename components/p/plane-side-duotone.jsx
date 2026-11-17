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
		"content": `<style>.a-3sl3ulc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 10h11a2 2 0 1 1 0 4h-4l-5 5H8l2-5H5L3 5h2z");
}

.ft5dv1b6b {
  fill: none;
}

.w97x3loiu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 10h11a2 2 0 1 1 0 4h-4l-5 5H8l2-5H5L3 5h2Z");
}
</style><g class="ft5dv1b6b"><path class="w97x3loiu"/><path class="a-3sl3ulc"/></g>`,
		"fallback": "coolicons:plane-side-duotone",
	});
}

export default Component;
