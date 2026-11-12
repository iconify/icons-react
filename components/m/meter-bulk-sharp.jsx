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

.df5n5-nbs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}

.u_lgrnbsf {
  d: path("M9 4a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm1 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-9 5V8H7v3Zm4-3h-2v3h2Zm2 3h2V8h-2Zm-7 6h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="df5n5-nbs"/><path class="u_lgrnbsf"/></g>`,
		"fallback": "coolicons:meter-bulk-sharp",
	});
}

export default Component;
