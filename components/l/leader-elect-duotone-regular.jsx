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
		"content": `<style>.fmms542kf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 7.5 2 -2 2 2 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i2xa3obeh {
  d: path("M14.32 9.5a5.5 5.5 0 1 1 -4.64 0");
}

.mj0-vmbss {
  d: path("m8 7.5 2 -2 2 2 2 -2 2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.otmdcqr7e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14.32 9.5a5.5 5.5 0 1 1 -4.64 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="fmms542kf"/><path class="otmdcqr7e"/><path class="mj0-vmbss"/><path class="i2xa3obeh"/></g>`,
		"fallback": "iconmind:leader-elect-duotone-regular",
	});
}

export default Component;
