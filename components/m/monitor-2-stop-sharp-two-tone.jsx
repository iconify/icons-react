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
		"content": `<style>.g7qcrlbrp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 2L22 2C22.5523 2 23 2.4477 23 3L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z4w1d9bnk {
  d: path("M2 3L22 3L22 17L2 17ZM12 17L12 21M7 21L17 21M9 7L15 7L15 13L9 13Z");
}
</style><g class="gp_8x1bzb"><path class="g7qcrlbrp"/><path class="z4w1d9bnk"/></g>`,
		"fallback": "keyline-icons:monitor-2-stop-sharp-two-tone",
	});
}

export default Component;
