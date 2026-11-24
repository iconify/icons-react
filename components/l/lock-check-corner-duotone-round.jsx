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
		"content": `<style>.ccdaugakf {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 21H8a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 3.464 2M8 9V7a4 4 0 1 1 8 0v2m-1 9l2 2l4-4");
}

.ft5dv1b6b {
  fill: none;
}

.nppu5sxnl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 21a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h7a4 4 0 0 0-4 4v8Z");
}
</style><g class="ft5dv1b6b"><path class="nppu5sxnl"/><path class="ccdaugakf"/></g>`,
		"fallback": "coolicons:lock-check-corner-duotone-round",
	});
}

export default Component;
