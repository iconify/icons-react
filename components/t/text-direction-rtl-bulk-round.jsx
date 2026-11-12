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

.ir3ypwbhn {
  d: path("M11 8V4a2 2 0 1 0 0 4m0 2a4 4 0 0 1 0-8h6a1 1 0 0 1 0 2v7a1 1 0 0 1-2 0V4h-2v7a1 1 0 0 1-2 0Z");
}

.j9ks0tsly {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.414 17H21a1 1 0 0 1 0 2H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414Z");
}
</style><g class="cuyn6tgcc"><path class="j9ks0tsly"/><path class="ir3ypwbhn"/></g>`,
		"fallback": "coolicons:text-direction-rtl-bulk-round",
	});
}

export default Component;
