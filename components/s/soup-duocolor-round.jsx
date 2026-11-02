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
		"content": `<style>.g1ti6243i {
  stroke-opacity: 0.4;
  d: path("M9 5L8 7m5-2l-1 2m5-2l-1 2m3 4l2-5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uepdcyzyv {
  d: path("M3 11h18a9 9 0 0 1-18 0");
}
</style><g class="nrj6p8qat"><path class="g1ti6243i"/><path class="uepdcyzyv"/></g>`,
		"fallback": "coolicons:soup-duocolor-round",
	});
}

export default Component;
