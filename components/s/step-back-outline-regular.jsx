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
		"content": `<style>.eep6j8bvo {
  d: path("M11 8a4 4 0 1 1 4 4");
}

.fhc_6lohv {
  d: path("M4.5 9.5 2 12l2.5 2.5");
}

.lvewu-bzn {
  d: path("M14 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t1rg4fbhf {
  d: path("M3 12h5");
}
</style><g class="nrj6p8qat"><path class="t1rg4fbhf"/><path class="fhc_6lohv"/><path class="eep6j8bvo"/><path class="lvewu-bzn"/></g>`,
		"fallback": "iconmind:step-back-outline-regular",
	});
}

export default Component;
