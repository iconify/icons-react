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
		"content": `<style>.gsq10_ixg {
  d: path("M7 6h4v3H7Z");
}

.ilzxawyks {
  fill: currentColor;
  d: path("M7 6h4v3H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l7ilsmbrb {
  fill: currentColor;
  d: path("M6 3h11l4 4v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2");
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

.q7l4tcb1c {
  d: path("M6 3h11l4 4v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2");
}
</style><g class="nrj6p8qat"><path class="l7ilsmbrb"/><path class="ilzxawyks"/><path class="q7l4tcb1c"/><path class="gsq10_ixg"/></g>`,
		"fallback": "iconmind:key-card-duotone-regular",
	});
}

export default Component;
