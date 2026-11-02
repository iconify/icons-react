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
		"content": `<style>.bc0wrdbma {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.eevg6pb8h {
  d: path("M10 7a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6-4v4a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0m-3 18a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="bc0wrdbma"/><path class="eevg6pb8h"/></g>`,
		"fallback": "coolicons:plug-bulk",
	});
}

export default Component;
