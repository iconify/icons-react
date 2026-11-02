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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hs_b7bcnm {
  d: path("M11 20V10a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0");
}

.j4mm5vsqp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 13a7 7 0 0 1-7-7V4a1 1 0 0 1 1-1h3a7.005 7.005 0 0 1 6.95 6.153A6.97 6.97 0 0 1 18 7h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-3a1 1 0 0 1-1-1v-1q0-.503.07-1Z");
}
</style><g class="cuyn6tgcc"><path class="j4mm5vsqp"/><path class="hs_b7bcnm"/></g>`,
		"fallback": "coolicons:sprout-bulk-round",
	});
}

export default Component;
