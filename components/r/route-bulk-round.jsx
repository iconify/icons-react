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

.cv-xifokp {
  d: path("M9 7a2 2 0 1 0 0 4h6a4 4 0 0 1 0 8H8a1 1 0 0 1 0-2h7a2 2 0 1 0 0-4H9a4 4 0 0 1 0-8h6.171a3 3 0 1 1 0 2Zm8.293-.293a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}

.zjfit0btt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><g class="cuyn6tgcc"><path class="zjfit0btt"/><path class="cv-xifokp"/></g>`,
		"fallback": "coolicons:route-bulk-round",
	});
}

export default Component;
