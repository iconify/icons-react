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

.v1mmytbcw {
  d: path("M17 5h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8v1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h1v-2a1 1 0 0 1 1-1h8V7h-3a1 1 0 0 1 0-2m-6 15h2v-4h-2Z");
}

.wnpw2mb8u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm-7 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="wnpw2mb8u"/><path class="v1mmytbcw"/></g>`,
		"fallback": "coolicons:paint-roller-bulk-sharp",
	});
}

export default Component;
