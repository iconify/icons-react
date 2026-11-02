import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

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

.ugok9d7un {
  d: path("M17 5h1a4 4 0 0 1 0 8h-3a2 2 0 0 0-1.847 1.23A3 3 0 0 1 15 17v2a3 3 0 1 1-6 0v-2c0-1.306.848-2.464 2.092-2.86A4 4 0 0 1 15 11h3a2 2 0 1 0 0-4h-1a1 1 0 0 1 0-2m-6 12v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0");
}

.v6_d3nori {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 2h8a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m3 15a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0Z");
}
</style><g class="cuyn6tgcc"><path class="v6_d3nori"/><path class="ugok9d7un"/></g>`,
		"fallback": "coolicons:paint-roller-bulk-round",
	});
}

export default Component;
