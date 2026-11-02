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
		"content": `<style>.cshoulbrv {
  d: path("M17.293 8.293L18.586 7H7a3 3 0 0 0-3 3v1a1 1 0 0 1-2 0v-1a5 5 0 0 1 5-5h11.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414m-8 2l2-2A1 1 0 0 1 13 9v6a1 1 0 0 1-2 0v-3.586l-.293.293a.999.999 0 1 1-1.414-1.414M22 13v1a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 19H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 17H17a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.fw86-bbfx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z");
}
</style><g class="cuyn6tgcc"><path class="fw86-bbfx"/><path class="cshoulbrv"/></g>`,
		"fallback": "coolicons:repeat-one-bulk-round",
	});
}

export default Component;
