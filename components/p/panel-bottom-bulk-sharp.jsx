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

.yfoootbiq {
  d: path("M4 14h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="xam6kbw8x"/><path class="yfoootbiq"/></g>`,
		"fallback": "coolicons:panel-bottom-bulk-sharp",
	});
}

export default Component;
