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

.hbvml3bgf {
  d: path("M128 56a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88-40h-16V80h16a8 8 0 0 0 0-16h-16V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24H40a8 8 0 0 0 0 16h16v64H40a8 8 0 0 0 0 16h16v56a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-56h16a8 8 0 0 0 0-16m-32 72H72V40h112z");
}

.xl5vjq0ci {
  d: path("M184 32H72a8 8 0 0 0-8 8v176a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 160a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-80a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="xl5vjq0ci"/><path class="hbvml3bgf"/></g>`,
		"fallback": "ph:traffic-signal-duotone",
	});
}

export default Component;
