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
		"content": `<style>.i857i-b1f {
  d: path("M4 20 18 6");
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mzm25fejl {
  d: path("m18 6 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.th7wxwuos {
  d: path("M4 12c3 -3 5 3 8 0s5 3 8 0");
}
</style><g class="nrj6p8qat"><path class="i857i-b1f"/><path class="mzm25fejl"/><path class="m0hvambgh"/><path class="th7wxwuos"/></g>`,
		"fallback": "iconmind:sewing-outline-regular",
	});
}

export default Component;
