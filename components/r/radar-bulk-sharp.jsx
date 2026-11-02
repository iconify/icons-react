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

.nttvk-r-x {
  d: path("m15.477 7.109l2.18-2.18a.999.999 0 1 1 1.414 1.414l-2.18 2.18a6.002 6.002 0 1 1-9.474-.396a6 6 0 0 1 8.06-1.018m-.031 2.859l-2.739 2.739a.999.999 0 1 1-1.414-1.414l2.739-2.739a4 4 0 1 0 1.414 1.414");
}

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="nttvk-r-x"/></g>`,
		"fallback": "coolicons:radar-bulk-sharp",
	});
}

export default Component;
