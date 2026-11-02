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

.hcmgl-bpl {
  d: path("M4 10h2V3a1 1 0 0 1 2 0v7h2V3a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1H8v9a1 1 0 0 1-2 0v-9H3a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0Zm18 11a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0Z");
}

.j211bzbzc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 14a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8c0-1.596.627-3.117 1.757-4.243a6 6 0 0 1 1.907-1.285A5.9 5.9 0 0 1 21 2a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="j211bzbzc"/><path class="hcmgl-bpl"/></g>`,
		"fallback": "coolicons:utensils-bulk-sharp",
	});
}

export default Component;
