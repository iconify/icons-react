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

.khs7i6jcw {
  d: path("M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m184 32H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16m0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16m0 40H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16");
}

.ki4bdibso {
  d: path("M216 64v120H56a16 16 0 0 1-16-16V64Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ki4bdibso"/><path class="khs7i6jcw"/></g>`,
		"fallback": "ph:text-align-right-duotone",
	});
}

export default Component;
