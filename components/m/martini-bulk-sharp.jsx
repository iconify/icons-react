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

.dwsfs8bks {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h16a1.002 1.002 0 0 1 .707 1.707l-8 8a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 4 2");
}

.iv0w9bbpt {
  d: path("M7 5h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m1 17a1 1 0 0 1 0-2h3v-9a1 1 0 0 1 2 0v9h3a1 1 0 0 1 0 2Z");
}
</style><g class="cuyn6tgcc"><path class="dwsfs8bks"/><path class="iv0w9bbpt"/></g>`,
		"fallback": "coolicons:martini-bulk-sharp",
	});
}

export default Component;
