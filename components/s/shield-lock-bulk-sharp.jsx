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

.t9hgvhmos {
  d: path("M16 10v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1a3 3 0 1 1 6 0a1 1 0 0 1 1 1m-5-1h2a1 1 0 0 0-2 0m-1 4h4v-2h-4Z");
}
</style><g class="cuyn6tgcc"><path class="qv681sbkm"/><path class="t9hgvhmos"/></g>`,
		"fallback": "coolicons:shield-lock-bulk-sharp",
	});
}

export default Component;
