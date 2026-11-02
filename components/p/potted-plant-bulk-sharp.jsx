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

.fo8wb1bxf {
  d: path("M15 13h-2v3a1 1 0 0 1-2 0v-4H9a7 7 0 0 1-7-7V3a1 1 0 0 1 1-1h3a7.01 7.01 0 0 1 6.57 4.58A6.98 6.98 0 0 1 18 4h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7M6 4H4v1a5 5 0 0 0 5 5h2V9a5 5 0 0 0-5-5m7 7h2a5 5 0 0 0 5-5h-2a5 5 0 0 0-5 5");
}

.x_nm9h__n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 4h3a1 1 0 0 1 1 1v1a7 7 0 0 1-7 7h-3a1 1 0 0 1-1-1H9a7 7 0 0 1-7-7V3a1 1 0 0 1 1-1h3a7.01 7.01 0 0 1 6.57 4.58A6.98 6.98 0 0 1 18 4m-1 11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="x_nm9h__n"/><path class="fo8wb1bxf"/></g>`,
		"fallback": "coolicons:potted-plant-bulk-sharp",
	});
}

export default Component;
