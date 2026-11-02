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
		"content": `<style>.bism5xbjj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 2h16a1 1 0 0 1 1 1v10c0 .265-.105.52-.293.707l-4 4A1 1 0 0 1 16 18h-3.586l-3.707 3.707A1 1 0 0 1 7 21v-3H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.dyf-03b4c {
  d: path("M13 11a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="bism5xbjj"/><path class="dyf-03b4c"/></g>`,
		"fallback": "coolicons:twitch-bulk-sharp",
	});
}

export default Component;
