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
		"content": `<style>.b_y-q3bra {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm5-2v16m7-11l-3 3l3 3");
}

.ft5dv1b6b {
  fill: none;
}

.i3g70q45n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 20a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3a1 1 0 0 1 1 1Z");
}
</style><g class="ft5dv1b6b"><path class="i3g70q45n"/><path class="b_y-q3bra"/></g>`,
		"fallback": "coolicons:panel-left-close-duotone",
	});
}

export default Component;
