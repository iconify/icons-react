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
		"content": `<style>.a2y8hljng {
  d: path("M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40");
}

.cuyn6tgcc {
  fill: currentColor;
}

.yp57fmbsa {
  d: path("M176 80a48 48 0 1 1-48-48a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="yp57fmbsa"/><path class="a2y8hljng"/></g>`,
		"fallback": "ph:map-pin-simple-line-duotone",
	});
}

export default Component;
