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
		"content": `<style>.c70wyxjpe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.ctynhw5wp {
  d: path("m16.293 21.707l-3-3a1 1 0 0 1 1.414-1.414L16 18.586V13a1 1 0 0 1 2 0v5.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="c70wyxjpe"/><path class="ctynhw5wp"/></g>`,
		"fallback": "coolicons:mobile-download-corner-bulk-sharp",
	});
}

export default Component;
