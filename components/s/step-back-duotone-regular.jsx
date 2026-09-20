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
		"content": `<style>.cppuet5kt {
  fill: currentColor;
  d: path("M14 16.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.eep6j8bvo {
  d: path("M11 8a4 4 0 1 1 4 4");
}

.fhc_6lohv {
  d: path("M4.5 9.5 2 12l2.5 2.5");
}

.j8colmblj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lq70kcw1r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4.5 9.5 2 12l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.rdx2fub1d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 8a4 4 0 1 1 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t1rg4fbhf {
  d: path("M3 12h5");
}
</style><g class="nrj6p8qat"><path class="cppuet5kt"/><path class="j8colmblj"/><path class="lq70kcw1r"/><path class="rdx2fub1d"/><path class="t1rg4fbhf"/><path class="fhc_6lohv"/><path class="eep6j8bvo"/><path class="lvewu-bzn"/></g>`,
		"fallback": "iconmind:step-back-duotone-regular",
	});
}

export default Component;
