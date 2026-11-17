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
		"content": `<style>.ef1bkfb-s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21a6 6 0 1 1 12 0m2-17a6.7 6.7 0 0 1 0 6m3-7a9.85 9.85 0 0 1 0 8");
}

.ft5dv1b6b {
  fill: none;
}

.v_c4m6bcz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0M3 21a6 6 0 1 1 12 0Z");
}
</style><g class="ft5dv1b6b"><path class="v_c4m6bcz"/><path class="ef1bkfb-s"/></g>`,
		"fallback": "coolicons:user-voice-duotone-sharp",
	});
}

export default Component;
