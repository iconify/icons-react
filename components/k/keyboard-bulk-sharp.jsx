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
		"content": `<style>.bc11tac6h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.kjgqwe0nk {
  d: path("M6.01 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm3 0a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2ZM12 8h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m3.01 0a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2ZM18 8h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2M6.01 11a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2ZM9 11h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m3.01 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2ZM15 11h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m3.01 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2ZM16 14a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bc11tac6h"/><path class="kjgqwe0nk"/></g>`,
		"fallback": "coolicons:keyboard-bulk-sharp",
	});
}

export default Component;
