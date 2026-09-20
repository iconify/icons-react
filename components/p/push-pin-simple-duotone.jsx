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
		"content": `<style>.bielgac6k {
  d: path("M200 176H56L80 40h96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.foby0lafx {
  d: path("M216 168h-9.29L185.54 48H192a8 8 0 0 0 0-16H64a8 8 0 0 0 0 16h6.46L49.29 168H40a8 8 0 0 0 0 16h80v56a8 8 0 0 0 16 0v-56h80a8 8 0 0 0 0-16M86.71 48h82.58l21.17 120H65.54Z");
}
</style><g class="cuyn6tgcc"><path class="bielgac6k"/><path class="foby0lafx"/></g>`,
		"fallback": "ph:push-pin-simple-duotone",
	});
}

export default Component;
