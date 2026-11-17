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
		"content": `<style>.dx309cc8e {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3V4Z");
}

.ft5dv1b6b {
  fill: none;
}

.u5uvotnbr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm11-2v16m-7-5l3-3l-3-3");
}
</style><g class="ft5dv1b6b"><path class="dx309cc8e"/><path class="u5uvotnbr"/></g>`,
		"fallback": "coolicons:panel-right-close-duotone",
	});
}

export default Component;
