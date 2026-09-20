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
		"content": `<style>.duisldofr {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.me177l4bh {
  d: path("M11 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y5y9-x5ge {
  d: path("M12 11v3");
}

.zmc7aqkcp {
  d: path("M9 6V3h6v3");
}
</style><g class="nrj6p8qat"><path class="duisldofr"/><path class="zmc7aqkcp"/><path class="y5y9-x5ge"/><path class="me177l4bh"/></g>`,
		"fallback": "iconmind:overweight-bag-outline-regular",
	});
}

export default Component;
