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

.mbuv-cbnv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 19v-6H4l8-8l8 8h-5v6Z");
}

.z6_iz9zoy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 19H9v-6H4l8-8l8 8h-5v6z");
}
</style><g class="ft5dv1b6b"><path class="mbuv-cbnv"/><path class="z6_iz9zoy"/></g>`,
		"fallback": "coolicons:shift-duotone-sharp",
	});
}

export default Component;
