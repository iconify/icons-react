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
		"content": `<style>.kk-764bgz {
  d: path("M17 7h4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q0ddccbcl {
  d: path("m3 17 6 -6 4 4 8 -8");
}
</style><g class="nrj6p8qat"><path class="q0ddccbcl"/><path class="kk-764bgz"/></g>`,
		"fallback": "iconmind:trend-up-outline-regular",
	});
}

export default Component;
