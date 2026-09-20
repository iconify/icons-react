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
		"content": `<style>.a2wn47b0j {
  fill: currentColor;
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nl0jrlbgx {
  d: path("M4 20 20 4v16Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tkci71b9o {
  fill: currentColor;
  d: path("M4 20 20 4v16Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="tkci71b9o"/><path class="a2wn47b0j"/><path class="nl0jrlbgx"/><path class="myekf3bzc"/></g>`,
		"fallback": "iconmind:physics-sim-duotone-regular",
	});
}

export default Component;
