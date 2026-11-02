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
		"content": `<style>.bcmlmcbbi {
  d: path("M13 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Zm2 5h4V5h-4Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.p0f3t6b7r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 10h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="p0f3t6b7r"/><path class="bcmlmcbbi"/></g>`,
		"fallback": "coolicons:layout-bento-bulk-sharp",
	});
}

export default Component;
