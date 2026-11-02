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

.e6qjd50sc {
  d: path("M9 6h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2M6 21v-3a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v3a1 1 0 0 1-2 0v-3a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v3a1 1 0 0 1-2 0");
}

.spjl01l0b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 22H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h8c1.317 0 2.748.335 3.707 1.293l2 2C21.665 6.252 22 7.683 22 9v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22");
}
</style><g class="cuyn6tgcc"><path class="spjl01l0b"/><path class="e6qjd50sc"/></g>`,
		"fallback": "coolicons:save-bulk-round",
	});
}

export default Component;
