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
		"content": `<style>.dpgn-eb_z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 19a5.657 5.657 0 0 1-8-8Z");
}

.ft5dv1b6b {
  fill: none;
}

.udjp6gmkm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 19a5.657 5.657 0 1 1-8-8Zm-4-4l4-4m0-4a4 4 0 0 1 4 4m-4-8a8 8 0 0 1 8 8");
}
</style><g class="ft5dv1b6b"><path class="dpgn-eb_z"/><path class="udjp6gmkm"/></g>`,
		"fallback": "coolicons:satellite-dish-duotone-round",
	});
}

export default Component;
