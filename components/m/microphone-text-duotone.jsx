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

.ovz594b6d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6v6a2 2 0 1 0 4 0V6a2 2 0 1 0-4 0m-3 4v2c0 6.667 10 6.667 10 0v-2m-5 7v4m-4 0h8m3-14h6m-3 0v6");
}

.wve4-70yx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 6v6a3 3 0 1 1-6 0V6a3 3 0 1 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="wve4-70yx"/><path class="ovz594b6d"/></g>`,
		"fallback": "coolicons:microphone-text-duotone",
	});
}

export default Component;
