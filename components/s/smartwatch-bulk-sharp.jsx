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

.ebbehv36x {
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V4h-4v2a1 1 0 0 1-2 0Zm6 15a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v2h4Z");
}

.i3abjabnc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="i3abjabnc"/><path class="ebbehv36x"/></g>`,
		"fallback": "coolicons:smartwatch-bulk-sharp",
	});
}

export default Component;
