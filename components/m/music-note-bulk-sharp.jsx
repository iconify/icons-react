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

.gqjs11iml {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.vglsrvbfk {
  d: path("M11 4a1 1 0 0 1 1.447-.894l6 3a1 1 0 1 1-.894 1.788L13 5.618V17a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="gqjs11iml"/><path class="vglsrvbfk"/></g>`,
		"fallback": "coolicons:music-note-bulk-sharp",
	});
}

export default Component;
