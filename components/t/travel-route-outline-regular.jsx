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
		"content": `<style>.ai0e6e9tr {
  d: path("M16 19a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.e7hm_lx5y {
  d: path("M5 9v4h7v6h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o5r_prbgx {
  d: path("M2 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="o5r_prbgx"/><path class="ai0e6e9tr"/><path class="e7hm_lx5y"/></g>`,
		"fallback": "iconmind:travel-route-outline-regular",
	});
}

export default Component;
