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

.flam57i7w {
  d: path("M2 7V5a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H5a.997.997 0 0 0-1 1v2a1 1 0 0 1-2 0m15-5h2a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1h-2a1 1 0 0 1 0-2M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm2 0v2h2v-2Zm4 0v2h2v-2Zm6 2v-2h-2v2ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 1 0 2m15-5v2a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0");
}

.q88bgyn6c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 9h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2m0 2v2h2v-2Zm4 2h2v-2h-2Zm4 0h2v-2h-2Z");
}
</style><g class="cuyn6tgcc"><path class="q88bgyn6c"/><path class="flam57i7w"/></g>`,
		"fallback": "coolicons:scan-meter-bulk",
	});
}

export default Component;
