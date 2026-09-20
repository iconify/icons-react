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
		"content": `<style>.kf-dg5j1v {
  d: path("M12 2v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t9rz8abmm {
  d: path("M8 11c-1 4 -2 7 -2 9h12c0 -2 -1 -5 -2 -9Z");
}
</style><g class="nrj6p8qat"><path class="kf-dg5j1v"/><path class="t9rz8abmm"/></g>`,
		"fallback": "iconmind:mop-outline-regular",
	});
}

export default Component;
