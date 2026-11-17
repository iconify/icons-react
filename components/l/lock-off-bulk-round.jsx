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

.pj220gbcd {
  d: path("M16 6v4a1 1 0 0 1-2 0V6a2 2 0 1 0-4 0a1 1 0 0 1-2 0a4 4 0 0 1 8 0M2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}

.xa63aw78v {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.475 19.233L10.243 9H16a5 5 0 0 1 5 5v3a5 5 0 0 1-.525 2.233m-2.083 2.159c-.734.4-1.556.608-2.392.608H8a5 5 0 0 1-5-5v-3a5.01 5.01 0 0 1 3.297-4.703Z");
}
</style><g class="cuyn6tgcc"><path class="xa63aw78v"/><path class="pj220gbcd"/></g>`,
		"fallback": "coolicons:lock-off-bulk-round",
	});
}

export default Component;
