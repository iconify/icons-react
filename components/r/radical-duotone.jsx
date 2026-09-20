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

.jgc6q1bjw {
  d: path("M240 80v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yr--26plj {
  d: path("M248 80v24a8 8 0 0 1-16 0V88h-98.45L87.49 210.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L80 185.22l40.51-108A8 8 0 0 1 128 72h112a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="jgc6q1bjw"/><path class="yr--26plj"/></g>`,
		"fallback": "ph:radical-duotone",
	});
}

export default Component;
