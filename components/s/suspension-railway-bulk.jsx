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

.ixli4zbti {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 21H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h12c.265 0 .52.105.707.293l4 4A1 1 0 0 1 22 13v5a3 3 0 0 1-3 3M4 15h6v-5H5a1 1 0 0 0-1 1Zm8 0h8v-1.586L16.586 10H12Z");
}

.txdjuts6k {
  d: path("M21 3a1 1 0 0 1 0 2h-5v4a1 1 0 0 1-2 0V5H8v4a1 1 0 0 1-2 0V5H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="ixli4zbti"/><path class="txdjuts6k"/></g>`,
		"fallback": "coolicons:suspension-railway-bulk",
	});
}

export default Component;
