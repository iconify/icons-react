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

.nau3f9luo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1");
}

.p30-4tb0m {
  d: path("M8 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V5h-4v3a1 1 0 0 1-2 0Zm-1 9v-1a1 1 0 0 1 2 0v1h6v-1a1 1 0 0 1 2 0v1h4a1 1 0 0 1 0 2h-4v1a1 1 0 0 1-2 0v-1H9v1a1 1 0 0 1-2 0v-1H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="nau3f9luo"/><path class="p30-4tb0m"/></g>`,
		"fallback": "coolicons:toolbox-bulk-sharp",
	});
}

export default Component;
