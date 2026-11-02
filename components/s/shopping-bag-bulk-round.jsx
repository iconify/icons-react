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

.j2ocj64rv {
  d: path("M8 6a4 4 0 0 1 8 0a1 1 0 0 1-2 0a2 2 0 1 0-4 0a1 1 0 0 1-2 0");
}

.kxb14t88r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 10a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v7a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="kxb14t88r"/><path class="j2ocj64rv"/></g>`,
		"fallback": "coolicons:shopping-bag-bulk-round",
	});
}

export default Component;
