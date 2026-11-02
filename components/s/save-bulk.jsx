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

.mtp6jhbsi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 22H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h11c1.039 0 1.992.578 2.707 1.293l2 2C21.422 6.008 22 6.961 22 8v11a3 3 0 0 1-3 3");
}

.s6xgghbls {
  d: path("M9 6h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2M6 21v-5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a1 1 0 0 1-2 0v-5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="mtp6jhbsi"/><path class="s6xgghbls"/></g>`,
		"fallback": "coolicons:save-bulk",
	});
}

export default Component;
