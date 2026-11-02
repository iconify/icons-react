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

.gu4mt7bbd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m15.243 11l-8-8H19a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3ZM3.438 3.438L11 11H5a3 3 0 0 1-3-3V6c0-1.047.544-2.018 1.438-2.562M5 13h8l7.562 7.562A3 3 0 0 1 19 21H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m17 4.757L17.243 13H19a3 3 0 0 1 3 3Z");
}

.nerdhbb1y {
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-20-20a.999.999 0 1 1 1.414-1.414M7 16h.01a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="gu4mt7bbd"/><path class="nerdhbb1y"/></g>`,
		"fallback": "coolicons:server-off-bulk",
	});
}

export default Component;
