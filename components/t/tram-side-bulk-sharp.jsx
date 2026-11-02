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

.qyf3a35ct {
  d: path("M15 2a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-2 0V4H9a1 1 0 0 1 0-2Zm6 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}

.t21-v8bgo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 17V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m2-6h3V8H4Zm5 0h3V8H9Zm5 0h6V8h-6Z");
}
</style><g class="cuyn6tgcc"><path class="t21-v8bgo"/><path class="qyf3a35ct"/></g>`,
		"fallback": "coolicons:tram-side-bulk-sharp",
	});
}

export default Component;
