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

.t82mlma6g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 21a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h7a2 2 0 0 0-2 2v10Z");
}

.wmr3ynbxi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 21H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M8 9V7a4 4 0 1 1 8 0v2m-1 9l2 2l4-4");
}
</style><g class="ft5dv1b6b"><path class="t82mlma6g"/><path class="wmr3ynbxi"/></g>`,
		"fallback": "coolicons:lock-check-corner-duotone",
	});
}

export default Component;
