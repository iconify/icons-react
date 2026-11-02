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

.eszthacaw {
  d: path("M14.293 6.707L13 5.414V13a1 1 0 0 1-2 0V5.414L9.707 6.707a.999.999 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414M7 11H5v9h14v-9h-2a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2");
}

.h_-fgefwo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 10h16v11H4Z");
}
</style><g class="cuyn6tgcc"><path class="h_-fgefwo"/><path class="eszthacaw"/></g>`,
		"fallback": "coolicons:share-bulk-sharp",
	});
}

export default Component;
