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
		"content": `<style>.b-qluckwo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 13a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.r9ip46fyz {
  d: path("M13 5.733V9a1 1 0 0 1-2 0V5.733a2.001 2.001 0 1 1 2 0M8 15v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0m8 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0ZM3 16a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm16-2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="b-qluckwo"/><path class="r9ip46fyz"/></g>`,
		"fallback": "coolicons:robot-bulk-round",
	});
}

export default Component;
