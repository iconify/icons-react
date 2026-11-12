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

.opey8uwig {
  d: path("m6.293 11.293l2-2a1 1 0 0 1 1.414 0l1.019 1.019l1.38-2.759a1 1 0 1 1 1.788.894l-2 4a.997.997 0 0 1-1.601.26L9 11.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414m9.414 3l6 6a.999.999 0 1 1-1.414 1.414l-6-6a.999.999 0 1 1 1.414-1.414");
}

.pjl2xdbsb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0");
}
</style><g class="cuyn6tgcc"><path class="pjl2xdbsb"/><path class="opey8uwig"/></g>`,
		"fallback": "coolicons:search-chart-bulk-sharp",
	});
}

export default Component;
