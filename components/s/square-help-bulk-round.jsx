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

.ybi_gbb0b {
  d: path("M8 11a4 4 0 1 1 4 4a1 1 0 0 1 0-2a2 2 0 1 0-2-2a1 1 0 0 1-2 0m4 5h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}

.yqxcxg4xa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="yqxcxg4xa"/><path class="ybi_gbb0b"/></g>`,
		"fallback": "coolicons:square-help-bulk-round",
	});
}

export default Component;
