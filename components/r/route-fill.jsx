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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p04d4_v1f {
  d: path("M9 18H14C16.2091 18 18 16.2091 18 14V3M15 6L18 3L21 6");
}

.tfqar0b9x {
  fill: currentColor;
  d: path("M10 18C10 20.2091 8.2091 22 6 22C3.7909 22 2 20.2091 2 18C2 15.7909 3.7909 14 6 14C8.2091 14 10 15.7909 10 18Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="p04d4_v1f"/><path class="tfqar0b9x"/></g>`,
		"fallback": "keyline-icons:route-fill",
	});
}

export default Component;
