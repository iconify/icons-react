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

.mzow7zb4w {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 9a7 7 0 1 1 14 0v6a7 7 0 1 1-14 0Z");
}

.sbivg24wv {
  d: path("M13 7v3a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="mzow7zb4w"/><path class="sbivg24wv"/></g>`,
		"fallback": "coolicons:mouse-bulk-sharp",
	});
}

export default Component;
