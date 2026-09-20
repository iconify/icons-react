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
		"content": `<style>.cpsm-qevf {
  d: path("M9 7.5 6.5 10 9 12.5");
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.myn7q3llc {
  d: path("m13 10.5 2 2 2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o7jy28bce {
  d: path("M6.5 10H11");
}
</style><g class="nrj6p8qat"><path class="jd_dotbnq"/><path class="o7jy28bce"/><path class="cpsm-qevf"/><path class="myn7q3llc"/></g>`,
		"fallback": "iconmind:refund-approve-outline-regular",
	});
}

export default Component;
