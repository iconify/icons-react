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

.lmj60_bhj {
  d: path("M200 136H56.46A72.08 72.08 0 0 0 128 200h72a8 8 0 0 1 0 16h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72.08 72.08 0 0 0-71.54 64H200a8 8 0 0 1 0 16");
}

.ymfviwb7a {
  d: path("M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ymfviwb7a"/><path class="lmj60_bhj"/></g>`,
		"fallback": "ph:member-of-duotone",
	});
}

export default Component;
