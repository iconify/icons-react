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

.dvj5lemin {
  d: path("M7 7V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h9V4H9v3a1 1 0 0 1-2 0m4.293 2.707a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L12.586 13H5a1 1 0 0 1 0-2h7.586Z");
}

.to5613suh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 3h11v18H8Z");
}
</style><g class="cuyn6tgcc"><path class="to5613suh"/><path class="dvj5lemin"/></g>`,
		"fallback": "coolicons:log-in-bulk-sharp",
	});
}

export default Component;
