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

.hz1u_9b7n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a6 6 0 0 1-6 6v4H9v-4a5 5 0 0 1-5-5Zm0 0V3h6v8");
}

.zw3f55a5x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 12V3h6v8h10a6 6 0 0 1-6 6v4H9v-4a5 5 0 0 1-5-5");
}
</style><g class="ft5dv1b6b"><path class="zw3f55a5x"/><path class="hz1u_9b7n"/></g>`,
		"fallback": "coolicons:toilet-duotone-sharp",
	});
}

export default Component;
