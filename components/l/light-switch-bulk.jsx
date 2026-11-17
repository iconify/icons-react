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

.e0qj3vblb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m4 6v8h6V8Z");
}

.x9aqip03f {
  d: path("M9 6h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m6 5V8H9v3Zm-6 2v3h6v-3Z");
}
</style><g class="cuyn6tgcc"><path class="e0qj3vblb"/><path class="x9aqip03f"/></g>`,
		"fallback": "coolicons:light-switch-bulk",
	});
}

export default Component;
