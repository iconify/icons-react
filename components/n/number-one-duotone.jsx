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

.fy7dlkk4k {
  d: path("M144 48v160a8 8 0 0 1-16 0V62.13l-27.88 16.73a8 8 0 1 1-8.24-13.72l40-24A8 8 0 0 1 144 48");
}

.hidfxz0es {
  d: path("M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="fy7dlkk4k"/></g>`,
		"fallback": "ph:number-one-duotone",
	});
}

export default Component;
