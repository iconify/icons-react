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
		"content": `<style>.ajvp0bcfw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m17.707 2.293l4 4A1 1 0 0 1 22 7v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14c.265 0 .52.105.707.293");
}

.cuyn6tgcc {
  fill: currentColor;
}

.qixne6ben {
  d: path("M9 6h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2M6 21v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0v-6H8v6a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="ajvp0bcfw"/><path class="qixne6ben"/></g>`,
		"fallback": "coolicons:save-bulk-sharp",
	});
}

export default Component;
