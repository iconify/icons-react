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
		"content": `<style>.e6r_7bcqj {
  d: path("M9 18L14 18C15.1046 18 16.1046 17.5523 16.8284 16.8284M18 12.3431L18 3M15 6L18 3L21 6M2 2L22 22");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tfqar0b9x {
  fill: currentColor;
  d: path("M10 18C10 20.2091 8.2091 22 6 22C3.7909 22 2 20.2091 2 18C2 15.7909 3.7909 14 6 14C8.2091 14 10 15.7909 10 18Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="tfqar0b9x"/><path class="e6r_7bcqj"/></g>`,
		"fallback": "keyline-icons:route-off-fill",
	});
}

export default Component;
