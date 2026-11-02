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

.v-q3t9ivr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v13H4Zm5 16h6M10 7v6l4-3Z");
}

.yktsg0b5t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 4v13H4V4Zm-6 6l-4-3v6Z");
}
</style><g class="ft5dv1b6b"><path class="yktsg0b5t"/><path class="v-q3t9ivr"/></g>`,
		"fallback": "coolicons:monitor-play-duotone-sharp",
	});
}

export default Component;
