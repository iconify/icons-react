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

.kbo5uxb6d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.443 6.103l4.5 2.223a1 1 0 0 1 .557.896v5.556a1 1 0 0 1-.557.896l-4.5 2.223a1 1 0 0 1-.886 0l-4.5-2.223a1 1 0 0 1-.557-.896V9.222a1 1 0 0 1 .557-.896l4.5-2.223c.279-.137.607-.137.886 0");
}

.n8c0seiqw {
  d: path("M21 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM4 4v16h16V4Zm8 6.329l4.057-2.003a.999.999 0 1 1 .886 1.793L13 12.066V17a1 1 0 0 1-2 0v-4.934l-3.943-1.947a1 1 0 1 1 .886-1.793Z");
}
</style><g class="cuyn6tgcc"><path class="kbo5uxb6d"/><path class="n8c0seiqw"/></g>`,
		"fallback": "coolicons:square-box-bulk-sharp",
	});
}

export default Component;
