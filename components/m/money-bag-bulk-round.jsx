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
		"content": `<style>.bwpwa14ne {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7.143 3.514A.997.997 0 0 1 8 2h8a1 1 0 0 1 .857 1.514l-2.598 4.331l4.448 4.448C19.665 13.252 20 14.683 20 16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2c0-1.317.335-2.748 1.293-3.707l4.448-4.448Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.hlbd05bee {
  d: path("M10 7h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="bwpwa14ne"/><path class="hlbd05bee"/></g>`,
		"fallback": "coolicons:money-bag-bulk-round",
	});
}

export default Component;
