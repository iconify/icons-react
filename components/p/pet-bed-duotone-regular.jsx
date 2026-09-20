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
		"content": `<style>.ab_clyzfw {
  d: path("M3 14c0 -4 4 -6 9 -6s9 2 9 6c0 3 -4 4 -9 4s-9 -1 -9 -4");
}

.gvik8m1ti {
  fill: currentColor;
  d: path("M7 14c0 -2 2 -3 5 -3s5 1 5 3c0 1.5 -2 2 -5 2s-5 -0.5 -5 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mwqpylb0b {
  fill: currentColor;
  d: path("M3 14c0 -4 4 -6 9 -6s9 2 9 6c0 3 -4 4 -9 4s-9 -1 -9 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ulpw-dlmu {
  d: path("M7 14c0 -2 2 -3 5 -3s5 1 5 3c0 1.5 -2 2 -5 2s-5 -0.5 -5 -2");
}
</style><g class="nrj6p8qat"><path class="mwqpylb0b"/><path class="gvik8m1ti"/><path class="ab_clyzfw"/><path class="ulpw-dlmu"/></g>`,
		"fallback": "iconmind:pet-bed-duotone-regular",
	});
}

export default Component;
