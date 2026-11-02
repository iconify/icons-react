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

.q95mx0efm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 11.423V5a3 3 0 1 1 6 0v6.423a5.473 5.473 0 1 1-6 0");
}

.vpa8bs10m {
  d: path("M19 3a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm-2 3a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm2 3a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="q95mx0efm"/><path class="vpa8bs10m"/></g>`,
		"fallback": "coolicons:thermometer-bulk-round",
	});
}

export default Component;
