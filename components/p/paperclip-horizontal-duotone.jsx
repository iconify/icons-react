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

.s8w1wab4y {
  d: path("M240 128a48 48 0 0 1-48 48H48a32 32 0 0 1 0-64h32V80h112a48 48 0 0 1 48 48");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zmpgrs18j {
  d: path("M248 128a56.06 56.06 0 0 1-56 56H48a40 40 0 0 1 0-80h144a24 24 0 0 1 0 48H80a8 8 0 0 1 0-16h112a8 8 0 0 0 0-16H48a24 24 0 0 0 0 48h144a40 40 0 0 0 0-80H80a8 8 0 0 1 0-16h112a56.06 56.06 0 0 1 56 56");
}
</style><g class="cuyn6tgcc"><path class="s8w1wab4y"/><path class="zmpgrs18j"/></g>`,
		"fallback": "ph:paperclip-horizontal-duotone",
	});
}

export default Component;
