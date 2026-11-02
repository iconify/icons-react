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

.mxwfhiokn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 12h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1m12 0h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1");
}

.y-y52scco {
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm2 4h14V5H5Z");
}
</style><g class="cuyn6tgcc"><path class="mxwfhiokn"/><path class="y-y52scco"/></g>`,
		"fallback": "coolicons:layout-template-bulk-sharp",
	});
}

export default Component;
