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
		"content": `<style>.aiqm6_pau {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 12a4 4 0 0 1 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h06k0cc0f {
  d: path("M3 12a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oh3qc3kah {
  d: path("M19 12a4 4 0 0 1 -8 0");
}

.raue1-0hj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="raue1-0hj"/><path class="aiqm6_pau"/><path class="h06k0cc0f"/><path class="oh3qc3kah"/></g>`,
		"fallback": "iconmind:seasonal-cycle-duotone-regular",
	});
}

export default Component;
