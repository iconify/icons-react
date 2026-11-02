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

.uyl8pnj4k {
  stroke-opacity: 0.4;
  d: path("m5 10l4-6m10 6l-4-6");
}

.yr04eqofp {
  d: path("M3 10h18M4 10l2 7c.507 1.776 1.732 3 3 3h6c1.268 0 2.493-1.224 3-3l2-7m-10 0v10m4-10v10");
}
</style><g class="nrj6p8qat"><path class="uyl8pnj4k"/><path class="yr04eqofp"/></g>`,
		"fallback": "coolicons:shopping-basket-duocolor-round",
	});
}

export default Component;
