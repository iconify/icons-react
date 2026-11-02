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

.daxhu3bzm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 8h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3m-1 5h12v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z");
}

.kc-rtuyok {
  d: path("M21 3a1 1 0 0 1 0 2h-5v4a1 1 0 0 1-2 0V5h-4v4a1 1 0 0 1-2 0V5H3a1 1 0 0 1 0-2ZM9.01 16a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm6 0a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="daxhu3bzm"/><path class="kc-rtuyok"/></g>`,
		"fallback": "coolicons:suspension-railway-front-bulk",
	});
}

export default Component;
