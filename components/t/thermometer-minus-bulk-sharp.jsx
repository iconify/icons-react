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

.fn0qe4bay {
  d: path("M15 6h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}

.q95mx0efm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 11.423V5a3 3 0 1 1 6 0v6.423a5.473 5.473 0 1 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="q95mx0efm"/><path class="fn0qe4bay"/></g>`,
		"fallback": "coolicons:thermometer-minus-bulk-sharp",
	});
}

export default Component;
