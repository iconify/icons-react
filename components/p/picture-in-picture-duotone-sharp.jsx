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

.t4m3i-1ip {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v16H3Zm8 8h6v4h-6Z");
}

.vy5ux_mnj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 4v16H3V4Z");
}
</style><g class="ft5dv1b6b"><path class="vy5ux_mnj"/><path class="t4m3i-1ip"/></g>`,
		"fallback": "coolicons:picture-in-picture-duotone-sharp",
	});
}

export default Component;
