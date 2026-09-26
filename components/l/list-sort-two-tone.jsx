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
		"content": `<style>.lv46fdvld {
  stroke-opacity: 0.4;
  d: path("M6 10L6 3M3 6L6 3L9 6M6 14L6 21M3 18L6 21L9 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z3g4_cbem {
  d: path("M13 6L21 6M13 12L21 12M13 18L21 18");
}
</style><g class="nrj6p8qat"><path class="lv46fdvld"/><path class="z3g4_cbem"/></g>`,
		"fallback": "keyline-icons:list-sort-two-tone",
	});
}

export default Component;
