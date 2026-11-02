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
		"content": `<style>.bpp7y5g_r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ybi_gbb0b {
  d: path("M8 11a4 4 0 1 1 4 4a1 1 0 0 1 0-2a2 2 0 1 0-2-2a1 1 0 0 1-2 0m4 5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="ybi_gbb0b"/></g>`,
		"fallback": "coolicons:square-help-bulk-sharp",
	});
}

export default Component;
