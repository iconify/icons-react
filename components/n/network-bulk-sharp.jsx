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

.nhjgzactp {
  d: path("M5 12a1 1 0 0 1 1-1h5V8a1 1 0 0 1 2 0v3h5a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-3H7v3a1 1 0 0 1-2 0Z");
}

.x_-tsibvz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM9 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Zm12 0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="x_-tsibvz"/><path class="nhjgzactp"/></g>`,
		"fallback": "coolicons:network-bulk-sharp",
	});
}

export default Component;
