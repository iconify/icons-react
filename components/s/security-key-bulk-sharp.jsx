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

.dc5amlhqs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.z7pmx5b4d {
  d: path("M21 8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h5v-1h-1a1 1 0 0 1 0-2h1v-1h-5a1 1 0 0 1 0-2Zm-11 5a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="dc5amlhqs"/><path class="z7pmx5b4d"/></g>`,
		"fallback": "coolicons:security-key-bulk-sharp",
	});
}

export default Component;
