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
		"content": `<style>.gner6472y {
  stroke-opacity: 0.4;
  d: path("M12 17L12 21M7 21L17 21");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.h_7ldlb8o {
  fill: currentColor;
  d: path("M2 2L22 2C22.5523 2 23 2.4477 23 3L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="gner6472y"/><path class="h_7ldlb8o"/></g>`,
		"fallback": "keyline-icons:monitor-2-sharp-duotone",
	});
}

export default Component;
