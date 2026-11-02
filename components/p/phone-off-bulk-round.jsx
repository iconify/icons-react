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

.gx06_gkaa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m11.518 8.239l-6.475 6.475a17 17 0 0 1-1.707-3.097A16.8 16.8 0 0 1 2 5c0-.797.314-1.558.879-2.121A3 3 0 0 1 5 2h1c2.253 0 4.118 1.603 4.928 3.629c.333.83.566 1.712.59 2.61m-4.539 8.782l4.228-4.228l1.5 1.5a1.123 1.123 0 0 0 1.586 0c.459-.459 1.038-.777 1.651-.982A6.5 6.5 0 0 1 18 13h1c.53 0 1.023.211 1.424.551C21.61 14.555 22 16.522 22 18v1c0 .797-.314 1.558-.879 2.121A3 3 0 0 1 19 22a16.8 16.8 0 0 1-6.617-1.336a16.9 16.9 0 0 1-5.404-3.643");
}

.s6450lbyw {
  d: path("m1.293 21.293l20-20a.999.999 0 1 1 1.414 1.414l-20 20a.999.999 0 1 1-1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="gx06_gkaa"/><path class="s6450lbyw"/></g>`,
		"fallback": "coolicons:phone-off-bulk-round",
	});
}

export default Component;
