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

.dcs_cw7zl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z");
}

.j2ocj64rv {
  d: path("M8 6a4 4 0 0 1 8 0a1 1 0 0 1-2 0a2 2 0 1 0-4 0a1 1 0 0 1-2 0");
}
</style><g class="cuyn6tgcc"><path class="dcs_cw7zl"/><path class="j2ocj64rv"/></g>`,
		"fallback": "coolicons:shopping-bag-bulk",
	});
}

export default Component;
