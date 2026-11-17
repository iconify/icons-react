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

.huoctxbcr {
  d: path("M13 6h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8h-3a1 1 0 0 1 0-2m-2 12H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2");
}

.qebz58hxe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="qebz58hxe"/><path class="huoctxbcr"/></g>`,
		"fallback": "coolicons:square-expand-bulk",
	});
}

export default Component;
