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

.o7-_vlb_v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3L3 9l8 4l4 8zM11 13l3-3");
}

.w7vewgrct {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m21 3l-6 18l-4-8l-8-4Z");
}
</style><g class="ft5dv1b6b"><path class="w7vewgrct"/><path class="o7-_vlb_v"/></g>`,
		"fallback": "coolicons:paper-plane-duotone-sharp",
	});
}

export default Component;
