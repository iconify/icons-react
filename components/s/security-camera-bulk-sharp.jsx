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

.e7d2wfxoh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.979 6.241L18.433 2.1a1 1 0 0 1 1.225.707l2.071 7.727a1 1 0 0 1-.708 1.225L5.567 15.9a1 1 0 0 1-1.225-.707L2.271 7.466a1 1 0 0 1 .708-1.225");
}

.h_4kdmbmy {
  d: path("m16.571 6.74l.518 1.932a1 1 0 0 1-1.932.518l-.518-1.932a1 1 0 0 1 1.932-.518M13 13.141V16h5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-3h-6a1 1 0 0 1-1-1v-3.859a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="e7d2wfxoh"/><path class="h_4kdmbmy"/></g>`,
		"fallback": "coolicons:security-camera-bulk-sharp",
	});
}

export default Component;
