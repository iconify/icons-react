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

.ib0p0hbcr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 14a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Z");
}

.ic_c64bzx {
  d: path("M8 10V6a4 4 0 0 1 8 0v4a1 1 0 0 1-2 0V6a2 2 0 1 0-4 0v4a1 1 0 0 1-2 0m.707 4.293L11 16.586l4.293-4.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="ib0p0hbcr"/><path class="ic_c64bzx"/></g>`,
		"fallback": "coolicons:lock-check-bulk-round",
	});
}

export default Component;
