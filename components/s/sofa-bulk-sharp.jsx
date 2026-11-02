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

.mi0ekbbuq {
  d: path("M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6h-5v7a1 1 0 0 1-2 0V6H6v3a1 1 0 0 1-2 0Zm2 14a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm14 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}

.vtrnfhbfb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 11a3 3 0 1 1 6 0v1h8v-1a3 3 0 1 1 6 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="vtrnfhbfb"/><path class="mi0ekbbuq"/></g>`,
		"fallback": "coolicons:sofa-bulk-sharp",
	});
}

export default Component;
