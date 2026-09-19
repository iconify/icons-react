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
		"content": `<style>.gpfjqdbtz {
  fill: currentColor;
  d: path("M8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm12 14H8V4h12zm-4.33-5.17l-2.48 3.09l-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2");
}

.i1e5go_1e {
  fill: currentColor;
  d: path("M8 16h12V4H8zm3.5-4.33l1.69 2.26l2.48-3.09L19 15H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="i1e5go_1e"/><path class="gpfjqdbtz"/>`,
		"fallback": "ic:twotone-collections",
	});
}

export default Component;
