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

.i0vhayuka {
  d: path("M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 136H40V56h176zm-112-56v24a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0m32-16v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0m32-16v56a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0");
}

.o27uy3b5a {
  d: path("M224 56v120a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="o27uy3b5a"/><path class="i0vhayuka"/></g>`,
		"fallback": "ph:presentation-chart-duotone",
	});
}

export default Component;
