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
		"content": `<style>.f8lmhfbaq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l5-5a1.414 1.414 0 0 1 2 0l4 4a1.414 1.414 0 0 1 0 2L10 20a1.414 1.414 0 0 1-2 0l-4-4a1.414 1.414 0 0 1 0-2zm-4 4l2 2m2-6l2 2m2-6l2 2");
}

.ft5dv1b6b {
  fill: none;
}

.zz0awxcua {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 4a1.415 1.415 0 0 1 2 0l4 4a1.415 1.415 0 0 1 0 2L10 20a1.415 1.415 0 0 1-2 0l-4-4a1.415 1.415 0 0 1 0-2Z");
}
</style><g class="ft5dv1b6b"><path class="zz0awxcua"/><path class="f8lmhfbaq"/></g>`,
		"fallback": "coolicons:ruler-duotone",
	});
}

export default Component;
