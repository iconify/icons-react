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

.p1xfbteup {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z");
}

.r9ip46fyz {
  d: path("M13 5.733V9a1 1 0 0 1-2 0V5.733a2.001 2.001 0 1 1 2 0M8 15v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0m8 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0ZM3 16a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm16-2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="p1xfbteup"/><path class="r9ip46fyz"/></g>`,
		"fallback": "coolicons:robot-bulk",
	});
}

export default Component;
