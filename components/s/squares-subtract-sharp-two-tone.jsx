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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.l4w4-acdu {
  d: path("M3 3L15 3L15 9L9 9L9 15L3 15ZM18 9L21 9L21 13.5M21 16.5L21 21L16.5 21M13.5 21L9 21L9 18");
}

.xas-3tocd {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 2L15 2C15.5523 2 16 2.4477 16 3L16 9C16 9.5523 15.5523 10 15 10L10 10L10 15C10 15.5523 9.5523 16 9 16L3 16C2.4477 16 2 15.5523 2 15L2 3C2 2.4477 2.4477 2 3 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xas-3tocd"/><path class="l4w4-acdu"/></g>`,
		"fallback": "keyline-icons:squares-subtract-sharp-two-tone",
	});
}

export default Component;
