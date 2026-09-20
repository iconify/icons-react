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
		"content": `<style>.gj3ndm0la {
  d: path("M15 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k58cpbhds {
  d: path("m6 15 3 -3h6V7");
}

.ph7m0rcoy {
  fill: currentColor;
  d: path("M3 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s78ap7_nj {
  fill: currentColor;
  d: path("M15 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sf6d_7c5k {
  d: path("M13 7h5");
}

.sprybdcan {
  d: path("M3 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="ph7m0rcoy"/><path class="s78ap7_nj"/><path class="sprybdcan"/><path class="gj3ndm0la"/><path class="k58cpbhds"/><path class="sf6d_7c5k"/></g>`,
		"fallback": "iconmind:scooter-duotone-thin",
	});
}

export default Component;
