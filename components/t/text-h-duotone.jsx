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

.f3q4-4bca {
  d: path("M208 56v144a8 8 0 0 1-16 0v-64H64v64a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v64h128V56a8 8 0 0 1 16 0");
}

.ivw9cid2u {
  d: path("M200 56v144H56V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ivw9cid2u"/><path class="f3q4-4bca"/></g>`,
		"fallback": "ph:text-h-duotone",
	});
}

export default Component;
