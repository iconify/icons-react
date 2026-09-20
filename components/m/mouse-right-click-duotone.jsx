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

.n48iy1xak {
  d: path("M200 80v32h-72V24h16a56 56 0 0 1 56 56");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x-cvb7bpp {
  d: path("M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64m48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48m-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48m32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48");
}
</style><g class="cuyn6tgcc"><path class="n48iy1xak"/><path class="x-cvb7bpp"/></g>`,
		"fallback": "ph:mouse-right-click-duotone",
	});
}

export default Component;
