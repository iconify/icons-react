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

.fdr57lb7d {
  d: path("M7 11V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-.2.6a6 6 0 0 1-9.6 0A1 1 0 0 1 7 11m8-.354V8H9v2.646a4 4 0 0 0 6 0M9 16h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}

.nrnkr7bfl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="nrnkr7bfl"/><path class="fdr57lb7d"/></g>`,
		"fallback": "coolicons:inverter-bulk",
	});
}

export default Component;
