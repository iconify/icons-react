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

.rl1dq4bco {
  d: path("M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.se39vtiow {
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-58.19-84.61a32 32 0 1 0-43.62 0a36 36 0 1 0 43.62 0M112 100a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20");
}
</style><g class="cuyn6tgcc"><path class="rl1dq4bco"/><path class="se39vtiow"/></g>`,
		"fallback": "ph:number-square-eight-duotone",
	});
}

export default Component;
