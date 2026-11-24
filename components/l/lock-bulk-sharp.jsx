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

.mrw7wccdy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 8h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1");
}

.u8o2urv0n {
  d: path("M7 7a5 5 0 0 1 10 0v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0Zm3.158 7.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><g class="cuyn6tgcc"><path class="mrw7wccdy"/><path class="u8o2urv0n"/></g>`,
		"fallback": "coolicons:lock-bulk-sharp",
	});
}

export default Component;
