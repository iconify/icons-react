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

.lgxhv7blq {
  d: path("M14 2a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0V4h-1a1 1 0 0 1 0-2Zm5.293 2.293a.999.999 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414ZM11 13V9a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0");
}

.rxtmbxbvl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 13a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9a9 9 0 0 1-9-9");
}
</style><g class="cuyn6tgcc"><path class="rxtmbxbvl"/><path class="lgxhv7blq"/></g>`,
		"fallback": "coolicons:stopwatch-bulk",
	});
}

export default Component;
