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

.qjqqbra1l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 6a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2Z");
}

.uj3h5nb2x {
  d: path("M9 21a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm8 0a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="qjqqbra1l"/><path class="uj3h5nb2x"/></g>`,
		"fallback": "coolicons:ladder-bulk",
	});
}

export default Component;
