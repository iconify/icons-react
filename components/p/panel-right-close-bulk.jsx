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

.dcvx-qzrl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z");
}

.jtacai2bp {
  d: path("M16 20a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Zm-9.707-5.707L8.586 12L6.293 9.707a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="dcvx-qzrl"/><path class="jtacai2bp"/></g>`,
		"fallback": "coolicons:panel-right-close-bulk",
	});
}

export default Component;
