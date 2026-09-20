import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.mbm07wbow {
  d: path("M235.06 120.61a8 8 0 0 0-8.72 1.73L200 148.69l-58.34-58.35a8 8 0 0 0-11.32 0L96 124.69L29.66 58.34a8 8 0 0 0-11.32 11.32l72 72a8 8 0 0 0 11.32 0L136 107.31L188.69 160l-26.35 26.34A8 8 0 0 0 168 200h64a8 8 0 0 0 8-8v-64a8 8 0 0 0-4.94-7.39M224 184h-36.69L224 147.31Z");
}

.wz2g1207s {
  d: path("M232 128v64h-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="wz2g1207s"/><path class="mbm07wbow"/></g>`,
		"fallback": "ph:trend-down-duotone",
	});
}

export default Component;
