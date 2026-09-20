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

.hidfxz0es {
  d: path("M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m4nhdgbkr {
  d: path("M176 160a56 56 0 0 1-93.33 41.74a8 8 0 1 1 10.66-11.92a40 40 0 1 0 .77-60.3a8 8 0 0 1-13-7.66l15.06-75.43A8 8 0 0 1 104 40h64a8 8 0 0 1 0 16h-57.44l-10.32 51.6A56 56 0 0 1 176 160");
}
</style><g class="cuyn6tgcc"><path class="hidfxz0es"/><path class="m4nhdgbkr"/></g>`,
		"fallback": "ph:number-five-duotone",
	});
}

export default Component;
