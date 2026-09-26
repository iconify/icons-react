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

.m7bey1brc {
  d: path("M9 1L9 8M15 1L15 8M12 17L12 23");
}

.uvsqb_-sh {
  fill: currentColor;
  d: path("M5 6L19 6C19.5523 6 20 6.4477 20 7L20 11C20 15.2802 16.2802 19 12 19C7.7198 19 4 15.2802 4 11L4 7C4 6.4477 4.4477 6 5 6Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="m7bey1brc"/><path class="uvsqb_-sh"/></g>`,
		"fallback": "keyline-icons:plug-sharp-fill",
	});
}

export default Component;
