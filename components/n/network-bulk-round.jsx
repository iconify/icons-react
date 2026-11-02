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

.g5i7-kdnk {
  d: path("M11 8a1 1 0 0 1 2 0v3h1a4.98 4.98 0 0 1 3.536 1.464A5 5 0 0 1 19 16a1 1 0 0 1-2 0a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3a1 1 0 0 1-2 0a5 5 0 0 1 1.464-3.536A4.98 4.98 0 0 1 10 11h1Z");
}

.w66e6qboz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3ZM2 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm12 0a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="w66e6qboz"/><path class="g5i7-kdnk"/></g>`,
		"fallback": "coolicons:network-bulk-round",
	});
}

export default Component;
