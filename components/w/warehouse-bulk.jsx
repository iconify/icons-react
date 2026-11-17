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

.xwoflwb9t {
  d: path("M7 16v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v7a1 1 0 0 1-2 0v-4H9v4a1 1 0 0 1-2 0Zm2-1h6v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Z");
}

.yq2putbzd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 22H6a3 3 0 0 1-3-3V9.236a3 3 0 0 1 1.658-2.683L9.13 4.317c.417-.21.876-.318 1.342-.317h3.056c.466-.001.925.107 1.342.317l4.472 2.236A3 3 0 0 1 21 9.236V19a3 3 0 0 1-3 3");
}
</style><g class="cuyn6tgcc"><path class="yq2putbzd"/><path class="xwoflwb9t"/></g>`,
		"fallback": "coolicons:warehouse-bulk",
	});
}

export default Component;
