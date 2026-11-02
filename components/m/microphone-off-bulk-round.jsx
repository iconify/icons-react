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

.q44tcnjof {
  d: path("m3.707 1.293l19 19a.999.999 0 1 1-1.414 1.414l-4.34-4.34A8.1 8.1 0 0 1 13 18.943V21a1 1 0 0 1-2 0v-2.061A8.006 8.006 0 0 1 4 11v-1a1 1 0 0 1 2 0v1a6.06 6.06 0 0 0 9.522 4.936L2.293 2.707a.999.999 0 1 1 1.414-1.414");
}

.tje28pa7x {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m10.258 5.016l-1.44-1.441A4 4 0 0 1 16 6v4.757ZM8 7l6.828 6.828A3.998 3.998 0 0 1 8 11Z");
}
</style><g class="cuyn6tgcc"><path class="tje28pa7x"/><path class="q44tcnjof"/></g>`,
		"fallback": "coolicons:microphone-off-bulk-round",
	});
}

export default Component;
