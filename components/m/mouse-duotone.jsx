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

.u3oxtwb2k {
  d: path("M200 112v64a56 56 0 0 1-56 56h-32a56 56 0 0 1-56-56v-64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x-cvb7bpp {
  d: path("M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48");
}
</style><g class="cuyn6tgcc"><path class="u3oxtwb2k"/><path class="x-cvb7bpp"/></g>`,
		"fallback": "ph:mouse-duotone",
	});
}

export default Component;
