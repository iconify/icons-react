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

.ghgy_mbzi {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 10a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 19H7a5 5 0 0 1-5-5Z");
}

.xyxt1gbec {
  d: path("M5 14v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2m12-3h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="ghgy_mbzi"/><path class="xyxt1gbec"/></g>`,
		"fallback": "coolicons:segmented-control-bulk-round",
	});
}

export default Component;
