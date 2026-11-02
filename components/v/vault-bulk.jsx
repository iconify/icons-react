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
		"content": `<style>.aib9okb5v {
  d: path("M7 11a5 5 0 1 1 10.001.001A5 5 0 0 1 7 11m2 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2M8 21a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm10 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.mz6os0efg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="mz6os0efg"/><path class="aib9okb5v"/></g>`,
		"fallback": "coolicons:vault-bulk",
	});
}

export default Component;
