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

.gwhycgb1s {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 5v2h2v10h-2v2H7v-2H5V7h2V5Z");
}

.t56mgobbl {
  d: path("M7.829 4h8.342A3 3 0 1 1 20 7.829v8.342A3 3 0 1 1 16.171 20H7.829A3 3 0 1 1 4 16.171V7.829A3 3 0 1 1 7.829 4M6 7.829v8.342A3.01 3.01 0 0 1 7.829 18h8.342A3.01 3.01 0 0 1 18 16.171V7.829A3 3 0 0 1 16.171 6H7.829A3 3 0 0 1 6 7.829");
}
</style><g class="cuyn6tgcc"><path class="gwhycgb1s"/><path class="t56mgobbl"/></g>`,
		"fallback": "coolicons:vector-square-bulk-round",
	});
}

export default Component;
