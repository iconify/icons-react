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

.wjq88mbmr {
  d: path("M17 7v2a1 1 0 0 1-2 0V7a3 3 0 1 0-6 0v2a1 1 0 0 1-2 0V7a5 5 0 0 1 10 0m-2 7a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="mrw7wccdy"/><path class="wjq88mbmr"/></g>`,
		"fallback": "coolicons:lock-minus-bulk-sharp",
	});
}

export default Component;
