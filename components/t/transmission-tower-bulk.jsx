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
		"content": `<style>.avx6odvfh {
  d: path("M8.613 10H6a.997.997 0 0 0-1 1v1a1 1 0 0 1-2 0v-1a3 3 0 0 1 3-3h3V6c0-.505.141-.998.365-1.447c.235-.469.558-.89.928-1.26A2.4 2.4 0 0 1 12 2.586a2.4 2.4 0 0 1 1.707.707c.37.37.693.791.928 1.26c.224.449.365.942.365 1.447v2h3a3 3 0 0 1 3 3v1a1 1 0 0 1-2 0v-1a1 1 0 0 0-1-1h-2.613l3.562 10.684a1.001 1.001 0 0 1-1.898.632L13.279 10h-2.558L6.949 21.316a1.001 1.001 0 0 1-1.898-.632ZM11 8h2V6c0-.193-.069-.382-.154-.553a2.9 2.9 0 0 0-.553-.74a.414.414 0 0 0-.586 0C11.395 5.02 11 5.532 11 6Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.t31wmmlhc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12 15.764l2.106-4.211a1 1 0 1 1 1.788.894L13.618 17H17a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h3.382l-2.276-4.553a1 1 0 1 1 1.788-.894Z");
}
</style><g class="cuyn6tgcc"><path class="t31wmmlhc"/><path class="avx6odvfh"/></g>`,
		"fallback": "coolicons:transmission-tower-bulk",
	});
}

export default Component;
