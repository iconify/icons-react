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

.nlcssh8lc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0M2 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.nqp1_rbdp {
  d: path("M4 5a1 1 0 0 1 1-1c1.853 0 3.686.384 5.383 1.13a14.54 14.54 0 0 1 7.487 7.487A13.4 13.4 0 0 1 19 18a1 1 0 0 1-2 0c0-1.579-.329-3.14-.964-4.586a12.3 12.3 0 0 0-2.618-3.832a12.3 12.3 0 0 0-3.832-2.618A11.4 11.4 0 0 0 5 6a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1a8.3 8.3 0 0 1 3.159.605c.954.385 1.821.96 2.548 1.688C12.225 13.811 13 15.864 13 18a1 1 0 0 1-2 0c0-1.6-.568-3.153-1.707-4.293a5.7 5.7 0 0 0-1.889-1.25A6.3 6.3 0 0 0 5 12a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="nlcssh8lc"/><path class="nqp1_rbdp"/></g>`,
		"fallback": "coolicons:network-ping-bulk-round",
	});
}

export default Component;
