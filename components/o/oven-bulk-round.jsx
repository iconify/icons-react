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

.jnlx1ibsq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5Z");
}

.urae08rzq {
  d: path("M8 5h.01a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2m0 4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm-9 6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Zm2 0v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a.997.997 0 0 0-1-1h-4a.997.997 0 0 0-1 1");
}
</style><g class="cuyn6tgcc"><path class="jnlx1ibsq"/><path class="urae08rzq"/></g>`,
		"fallback": "coolicons:oven-bulk-round",
	});
}

export default Component;
