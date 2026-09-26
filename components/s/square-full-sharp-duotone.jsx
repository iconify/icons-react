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

.l6fbk-bit {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2Z");
}

.vdku19ppe {
  d: path("M6 6L18 6L18 18L6 18L6 6Z");
}
</style><g class="cuyn6tgcc"><path class="l6fbk-bit"/><path class="vdku19ppe"/></g>`,
		"fallback": "keyline-icons:square-full-sharp-duotone",
	});
}

export default Component;
