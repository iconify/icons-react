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

.odotykcst {
  d: path("M224 80v88l-24 24H48V64h160a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yo15zpb8w {
  d: path("M128 128a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8M48 72h136a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m56 112H48a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16m125.66-21.66a8 8 0 0 0-11.32 0L192 188.69V112a8 8 0 0 0-16 0v76.69l-26.34-26.35a8 8 0 0 0-11.32 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32");
}
</style><g class="cuyn6tgcc"><path class="odotykcst"/><path class="yo15zpb8w"/></g>`,
		"fallback": "ph:sort-ascending-duotone",
	});
}

export default Component;
