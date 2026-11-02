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

.noytevbio {
  d: path("M10 3v11a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m6 3a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm0 4v11a1 1 0 0 1-2 0V10a1 1 0 0 1 2 0m-6 8v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0");
}

.qywezy0qz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m-6 8a3 3 0 1 1 0 6a3 3 0 0 1 0-6");
}
</style><g class="cuyn6tgcc"><path class="qywezy0qz"/><path class="noytevbio"/></g>`,
		"fallback": "coolicons:slider-vertical-1-bulk-round",
	});
}

export default Component;
