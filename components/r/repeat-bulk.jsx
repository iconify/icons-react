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

.d5yxe17qb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ona719b2x {
  d: path("M18.586 7H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V8a3 3 0 0 1 3-3h13.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414ZM22 16a3 3 0 0 1-3 3H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 17H19a1 1 0 0 0 1-1v-3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="d5yxe17qb"/><path class="ona719b2x"/></g>`,
		"fallback": "coolicons:repeat-bulk",
	});
}

export default Component;
