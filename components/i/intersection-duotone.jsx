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

.q7ov9490v {
  d: path("M200 120v80H56v-80a72 72 0 0 1 144 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y6ga_y32j {
  d: path("M208 120v80a8 8 0 0 1-16 0v-80a64 64 0 0 0-128 0v80a8 8 0 0 1-16 0v-80a80 80 0 0 1 160 0");
}
</style><g class="cuyn6tgcc"><path class="q7ov9490v"/><path class="y6ga_y32j"/></g>`,
		"fallback": "ph:intersection-duotone",
	});
}

export default Component;
