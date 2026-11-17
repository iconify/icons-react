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
		"content": `<style>.aorietp2j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 18H3V5h10v13m0-10h4l4 4v6h-2M9 18h6m-2-6h7M5 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.ft5dv1b6b {
  fill: none;
}

.w9fcs9j2r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 18V5h10v3h4l4 4v6h-2a1.999 1.999 0 0 0-3-1.732c-.619.357-1 1.017-1 1.732H9a1.999 1.999 0 0 0-3-1.732c-.619.357-1 1.017-1 1.732Z");
}
</style><g class="ft5dv1b6b"><path class="w9fcs9j2r"/><path class="aorietp2j"/></g>`,
		"fallback": "coolicons:truck-duotone-sharp",
	});
}

export default Component;
