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

.jv9_svena {
  d: path("M8 10v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0m10 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-7-4h2a2 2 0 1 1 0 4h-2a2 2 0 1 1 0-4");
}

.xtsn69bfg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="xtsn69bfg"/><path class="jv9_svena"/></g>`,
		"fallback": "coolicons:spirit-level-bulk-round",
	});
}

export default Component;
