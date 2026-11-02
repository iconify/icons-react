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

.m_ax_bbup {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}

.t7cy-21bh {
  d: path("M13 4v4h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 2 0M4 14h16a1 1 0 0 1 0 2h-7v4a1 1 0 0 1-2 0v-4H4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="m_ax_bbup"/><path class="t7cy-21bh"/></g>`,
		"fallback": "coolicons:table-cells-merge-bulk-sharp",
	});
}

export default Component;
