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
		"content": `<style>.as0zc0b6e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 15 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.awxqv1b4c {
  d: path("M17 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.dgfbh6b4z {
  d: path("M12 9v9");
}

.dpd39d9rw {
  fill: currentColor;
  d: path("M17 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ji1cfccfb {
  d: path("m9 15 3 3 3 -3");
}

.jzeve79sx {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.knb00ei4h {
  d: path("M5 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.shn2dkcie {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 9v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sw_hwrbxs {
  fill: currentColor;
  d: path("M5 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="sw_hwrbxs"/><path class="jzeve79sx"/><path class="dpd39d9rw"/><path class="shn2dkcie"/><path class="as0zc0b6e"/><path class="knb00ei4h"/><path class="ymw3aibdo"/><path class="awxqv1b4c"/><path class="dgfbh6b4z"/><path class="ji1cfccfb"/></g>`,
		"fallback": "iconmind:sampling-duotone-regular",
	});
}

export default Component;
