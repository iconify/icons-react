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
		"content": `<style>.iou_y8bpw {
  stroke-opacity: 0.4;
  d: path("M13 15H9v-4m0 4l6-6");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iou_y8bpw"/><path class="j_psw1y4g"/></g>`,
		"fallback": "coolicons:square-arrow-down-left-duocolor-sharp",
	});
}

export default Component;
