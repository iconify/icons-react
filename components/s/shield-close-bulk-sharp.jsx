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

.qv681sbkm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h16a1 1 0 0 1 1 1v7c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V3a1 1 0 0 1 1-1");
}

.siltbg4-r {
  d: path("M10.707 8.293L12 9.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L13.414 11l1.293 1.293a.999.999 0 1 1-1.414 1.414L12 12.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L10.586 11L9.293 9.707a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="qv681sbkm"/><path class="siltbg4-r"/></g>`,
		"fallback": "coolicons:shield-close-bulk-sharp",
	});
}

export default Component;
