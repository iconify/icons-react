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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.m77kogrek {
  d: path("M12 17L12 21M7 21L17 21");
}

.tp1x7zbkj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 2L22 2C22.5523 2 23 2.4477 23 3L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2ZM11 6L9 6L9 14L11 14L11 6ZM15 6L13 6L13 14L15 14L15 6Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="tp1x7zbkj"/><path class="m77kogrek"/></g>`,
		"fallback": "keyline-icons:monitor-2-pause-sharp-fill",
	});
}

export default Component;
