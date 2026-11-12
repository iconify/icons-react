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

.dox9e9smu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m0 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.o6gvkm3px {
  d: path("M11 6h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2m0 10h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="dox9e9smu"/><path class="o6gvkm3px"/></g>`,
		"fallback": "coolicons:poll-bulk-sharp",
	});
}

export default Component;
