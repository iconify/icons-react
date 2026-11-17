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

.q2e0ojb6o {
  d: path("M16 6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-1 5V8H9v3Zm-6 2v3h6v-3Z");
}

.sk3hi3ben {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm7 5v8h6V8Z");
}
</style><g class="cuyn6tgcc"><path class="sk3hi3ben"/><path class="q2e0ojb6o"/></g>`,
		"fallback": "coolicons:light-switch-bulk-sharp",
	});
}

export default Component;
