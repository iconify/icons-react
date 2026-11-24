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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.l1h_dlbmq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 21c-3-2-7-6-7-11a7 7 0 0 1 13.982-.5a7.502 7.502 0 0 0-7.405 8.572Z");
}

.p4f5gvb5n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 21c-3-2-7-6-7-11a7 7 0 0 1 13.982-.5M8 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m5 8l3 3l5-6");
}
</style><g class="ft5dv1b6b"><path class="l1h_dlbmq"/><path class="p4f5gvb5n"/></g>`,
		"fallback": "coolicons:map-pin-check-corner-duotone",
	});
}

export default Component;
