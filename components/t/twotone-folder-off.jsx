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
		"content": `<style>.ghnyxxblx {
  fill: currentColor;
  d: path("M15.17 18L4 6.83V18zm-4-10L20 17.17V8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.wp1ahfcvb {
  fill: currentColor;
  d: path("m.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31l1.41-1.41L2.1 2.1zM15.17 18H4V6.83zM20 6h-8l-2-2H7.17l4 4H20v9.17l1.76 1.76c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2");
}
</style><path class="ghnyxxblx"/><path class="wp1ahfcvb"/>`,
		"fallback": "ic:twotone-folder-off",
	});
}

export default Component;
