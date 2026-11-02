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

.r2ivfsbtd {
  d: path("M6 14V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1m12-6v6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0M8 9v4h4V9Zm0 9v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0m10 0v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0");
}

.xdtcfdboh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="xdtcfdboh"/><path class="r2ivfsbtd"/></g>`,
		"fallback": "coolicons:microwave-bulk-sharp",
	});
}

export default Component;
