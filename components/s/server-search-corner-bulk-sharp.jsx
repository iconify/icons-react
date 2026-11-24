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

.kny-5kbex {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 10h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}

.qj1la_erq {
  d: path("M7.01 6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm6.283 12.707l-.003-.002a3.83 3.83 0 1 1 6.031-.798l2.386 2.386a.999.999 0 1 1-1.414 1.414l-2.386-2.386a3.825 3.825 0 0 1-4.614-.614m4-1.414l.001-.002c.343-.343.534-.809.533-1.294a1.82 1.82 0 0 0-.534-1.29h-.001a1.829 1.829 0 1 0 .001 2.586M7.01 16a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="kny-5kbex"/><path class="qj1la_erq"/></g>`,
		"fallback": "coolicons:server-search-corner-bulk-sharp",
	});
}

export default Component;
