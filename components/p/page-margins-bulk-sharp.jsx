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

.nx3g2753s {
  d: path("M8 7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm2 9h4V8h-4Z");
}

.qwppxybix {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 21V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1m6-5h4V8h-4Z");
}
</style><g class="cuyn6tgcc"><path class="qwppxybix"/><path class="nx3g2753s"/></g>`,
		"fallback": "coolicons:page-margins-bulk-sharp",
	});
}

export default Component;
