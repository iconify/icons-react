import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.lw-000x2o {
  d: path("M208 164a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-156 4a28 28 0 1 0 28 28a28 28 0 0 0-28-28");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m149a-b8i {
  d: path("M212.92 17.69a8 8 0 0 0-6.86-1.45l-128 32A8 8 0 0 0 72 56v110.08A36 36 0 1 0 88 196V62.25l112-28v99.83A36 36 0 1 0 216 164V24a8 8 0 0 0-3.08-6.31M52 216a20 20 0 1 1 20-20a20 20 0 0 1-20 20m128-32a20 20 0 1 1 20-20a20 20 0 0 1-20 20");
}
</style><g class="cuyn6tgcc"><path class="lw-000x2o"/><path class="m149a-b8i"/></g>`,
		"fallback": "ph:music-notes-simple-duotone",
	});
}

export default Component;
