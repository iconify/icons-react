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
		"content": `<style>.f0h0jpb8m {
  stroke-opacity: 0.4;
  d: path("M18 5.5L22 5.5L22 13L13 13L13 16");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r1f-eub4c {
  fill: currentColor;
  d: path("M2 1L18 1C18.5523 1 19 1.4477 19 2L19 9C19 9.5523 18.5523 10 18 10L2 10C1.4477 10 1 9.5523 1 9L1 2C1 1.4477 1.4477 1 2 1ZM11 15L15 15C15.5523 15 16 15.4477 16 16L16 22C16 22.5523 15.5523 23 15 23L11 23C10.4477 23 10 22.5523 10 22L10 16C10 15.4477 10.4477 15 11 15Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="f0h0jpb8m"/><path class="r1f-eub4c"/></g>`,
		"fallback": "keyline-icons:paint-roller-sharp-duotone",
	});
}

export default Component;
