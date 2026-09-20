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

.zdreo7b9a {
  d: path("M232 48a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0V56h-16a8 8 0 0 1 0-16h16V24a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-16 64v52a36 36 0 1 1-16-29.92V112a8 8 0 0 1 16 0m-16 52a20 20 0 1 0-20 20a20 20 0 0 0 20-20M88 110.25V196a36 36 0 1 1-16-29.92V56a8 8 0 0 1 6.06-7.76l56-14a8 8 0 0 1 3.88 15.52L88 62.25v31.5l70.06-17.51a8 8 0 0 1 3.88 15.52ZM72 196a20 20 0 1 0-20 20a20 20 0 0 0 20-20");
}
</style><g class="cuyn6tgcc"><path class="lw-000x2o"/><path class="zdreo7b9a"/></g>`,
		"fallback": "ph:music-notes-plus-duotone",
	});
}

export default Component;
