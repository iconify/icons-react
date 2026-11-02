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

.h6ulsebpb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 5c1.317 0 2.748.335 3.707 1.293l2 2a5.243 5.243 0 0 1-7.414 7.414l-2-2C2.335 12.748 2 11.317 2 10V9a4 4 0 0 1 4-4Z");
}

.x0-xa_6_p {
  d: path("m15.707 5.293l3 3a5.24 5.24 0 0 1 0 7.414l-3 3a.999.999 0 1 1-1.414-1.414l3-3a3.243 3.243 0 0 0 0-4.586l-3-3a.999.999 0 1 1 1.414-1.414M7.01 9a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="h6ulsebpb"/><path class="x0-xa_6_p"/></g>`,
		"fallback": "coolicons:tags-bulk-round",
	});
}

export default Component;
