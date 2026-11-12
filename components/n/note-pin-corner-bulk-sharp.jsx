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

.fx9gftn8x {
  d: path("M20 12a1 1 0 0 1 0 2v1.586l1.707 1.707A1 1 0 0 1 21 19h-3v2a1 1 0 0 1-2 0v-2h-3a1.002 1.002 0 0 1-.707-1.707L14 15.586V14a1 1 0 0 1 0-2Z");
}

.nyzdfrksg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 3h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="nyzdfrksg"/><path class="fx9gftn8x"/></g>`,
		"fallback": "coolicons:note-pin-corner-bulk-sharp",
	});
}

export default Component;
