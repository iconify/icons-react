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
		"content": `<style>.bwe_218us {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ty4cb4bzm {
  d: path("M10 4v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0m7.707 5.707L15.414 12l2.293 2.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414");
}
</style><g class="cuyn6tgcc"><path class="bwe_218us"/><path class="ty4cb4bzm"/></g>`,
		"fallback": "coolicons:panel-left-close-bulk-round",
	});
}

export default Component;
