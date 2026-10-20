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

.h0uwp9u9v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M23 12L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2L13 2L13 12L23 12Z");
  stroke: none;
}

.nlgy4h1-b {
  d: path("M13 3L2 3L2 17L22 17L22 12M12 17L12 21M7 21L17 21M19 2L19 10M15 6L23 6");
}
</style><g class="gp_8x1bzb"><path class="h0uwp9u9v"/><path class="nlgy4h1-b"/></g>`,
		"fallback": "keyline-icons:monitor-2-plus-sharp-two-tone",
	});
}

export default Component;
