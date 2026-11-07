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

.d7qp75vtp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6.083 7.083A5.01 5.01 0 0 1 11 3h6a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5v-4a5.01 5.01 0 0 1 4.083-4.917");
}

.g6qhq3bhs {
  d: path("M8 8v12a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0m4-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2m0 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2m0 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="d7qp75vtp"/><path class="g6qhq3bhs"/></g>`,
		"fallback": "coolicons:newspaper-bulk-round",
	});
}

export default Component;
