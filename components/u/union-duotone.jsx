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

.gpyfylzod {
  d: path("M200 64v80a72 72 0 0 1-144 0V64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m_dlj9b6m {
  d: path("M208 64v80a80 80 0 0 1-160 0V64a8 8 0 0 1 16 0v80a64 64 0 0 0 128 0V64a8 8 0 0 1 16 0");
}
</style><g class="cuyn6tgcc"><path class="gpyfylzod"/><path class="m_dlj9b6m"/></g>`,
		"fallback": "ph:union-duotone",
	});
}

export default Component;
