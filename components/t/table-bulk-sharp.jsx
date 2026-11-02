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

.xam6kbw8x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}

.zwbm9rbyc {
  d: path("M13 4v4h7a1 1 0 0 1 0 2h-7v4h7a1 1 0 0 1 0 2h-7v4a1 1 0 0 1-2 0v-4H4a1 1 0 0 1 0-2h7v-4H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="xam6kbw8x"/><path class="zwbm9rbyc"/></g>`,
		"fallback": "coolicons:table-bulk-sharp",
	});
}

export default Component;
