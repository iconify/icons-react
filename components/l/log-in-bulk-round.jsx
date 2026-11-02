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

.dzztmhbpw {
  d: path("M12 2h3a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22h-3a4.98 4.98 0 0 1-3.536-1.464A5 5 0 0 1 7 17a1 1 0 0 1 2 0a3 3 0 0 0 3 3h3a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3a1 1 0 0 1-2 0a5 5 0 0 1 1.464-3.536A4.98 4.98 0 0 1 12 2m-.707 7.707a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L12.586 13H5a1 1 0 0 1 0-2h7.586Z");
}

.ouy3u35_j {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 7a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4Z");
}
</style><g class="cuyn6tgcc"><path class="ouy3u35_j"/><path class="dzztmhbpw"/></g>`,
		"fallback": "coolicons:log-in-bulk-round",
	});
}

export default Component;
