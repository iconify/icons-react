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

.d0z26kbdr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.p_1mf9lbo {
  d: path("M3 2h3a1 1 0 0 1 0 2H4v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m11 2h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m8-1v3a1 1 0 0 1-2 0V4h-2a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1M2 21V10a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m18-7v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0M4 11v9h9v-9Zm17 11h-3a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="d0z26kbdr"/><path class="p_1mf9lbo"/></g>`,
		"fallback": "coolicons:square-dashed-square-bulk-sharp",
	});
}

export default Component;
