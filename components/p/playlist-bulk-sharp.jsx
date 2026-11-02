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
		"content": `<style>.a37n3jqyy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m15.555 9.168l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 14 18v-8a1 1 0 0 1 1.555-.832M16 11.869v4.262L19.197 14Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.m6cs0kbou {
  d: path("M21 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm-10 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="a37n3jqyy"/><path class="m6cs0kbou"/></g>`,
		"fallback": "coolicons:playlist-bulk-sharp",
	});
}

export default Component;
