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

.slztfoafr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 11a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z");
}

.y7wvd8bru {
  d: path("M20 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a1 1 0 0 1 0-2h5v-1h-1a1 1 0 0 1 0-2h1v-1h-5a1 1 0 0 1 0-2Zm-10 5a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="slztfoafr"/><path class="y7wvd8bru"/></g>`,
		"fallback": "coolicons:security-key-bulk-round",
	});
}

export default Component;
