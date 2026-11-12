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

.kny-5kbex {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 10h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}

.wk5fhb80u {
  d: path("M7.01 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM18 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0ZM7.01 16a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10 4a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="kny-5kbex"/><path class="wk5fhb80u"/></g>`,
		"fallback": "coolicons:server-warning-corner-bulk-sharp",
	});
}

export default Component;
