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

.ib8ghnj8c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 10a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 14 19h-4a5 5 0 0 1-5-5Z");
}

.mxj72p-zr {
  d: path("M8 4.999c0-.796.317-1.56.881-2.122A3 3 0 0 1 11 2h2.001c1.657.001 3 1.343 2.999 3v1a1 1 0 0 1-2 0V4.998A1 1 0 0 0 13 4h-2a.997.997 0 0 0-1 1v1a1 1 0 0 1-2 0ZM11 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 1 2 0v1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1a1 1 0 0 1 2 0v1a1 1 0 0 0 1 1");
}
</style><g class="cuyn6tgcc"><path class="ib8ghnj8c"/><path class="mxj72p-zr"/></g>`,
		"fallback": "coolicons:smartwatch-bulk-round",
	});
}

export default Component;
