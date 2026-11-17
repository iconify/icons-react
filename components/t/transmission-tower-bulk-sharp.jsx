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

.rsjt-7kkf {
  d: path("M8.613 10H5v2a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1h5V5c0-.265.105-.52.293-.707l2-2a1 1 0 0 1 1.414 0l2 2A1 1 0 0 1 15 5v3h5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-2h-3.613l3.562 10.684a1.001 1.001 0 0 1-1.898.632L13.279 10h-2.558L6.949 21.316a1.001 1.001 0 0 1-1.898-.632ZM11 8h2V5.414l-1-1l-1 1Z");
}

.t31wmmlhc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12 15.764l2.106-4.211a1 1 0 1 1 1.788.894L13.618 17H17a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h3.382l-2.276-4.553a1 1 0 1 1 1.788-.894Z");
}
</style><g class="cuyn6tgcc"><path class="t31wmmlhc"/><path class="rsjt-7kkf"/></g>`,
		"fallback": "coolicons:transmission-tower-bulk-sharp",
	});
}

export default Component;
