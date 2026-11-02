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
		"content": `<style>.bz9d1exdo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm10 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2ZM3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.cw4fcrwag {
  d: path("M14 13h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2m-5 7a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm5-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bz9d1exdo"/><path class="cw4fcrwag"/></g>`,
		"fallback": "coolicons:qr-code-bulk",
	});
}

export default Component;
