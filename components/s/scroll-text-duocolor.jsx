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

.q7i7kubov {
  stroke-opacity: 0.4;
  d: path("M10 8h5m-5 4h5");
}

.tq6x44z3d {
  d: path("M18 17V5a2 2 0 0 0-2-2H5m2 2v14M7 5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3m0 11a2 2 0 1 0 4 0v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H9");
}
</style><g class="nrj6p8qat"><path class="q7i7kubov"/><path class="tq6x44z3d"/></g>`,
		"fallback": "coolicons:scroll-text-duocolor",
	});
}

export default Component;
