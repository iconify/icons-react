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

.on-vesq5u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 2c.379 0 .725.214.894.553l4 8A1 1 0 0 1 19 12H5a1 1 0 0 1-.894-1.447l4-8A1 1 0 0 1 9 2ZM8 16h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1");
}

.oyc2lyqjy {
  d: path("M13 11v5h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3v-5a1 1 0 0 1 2 0m2 7H9v2h6Z");
}
</style><g class="cuyn6tgcc"><path class="on-vesq5u"/><path class="oyc2lyqjy"/></g>`,
		"fallback": "coolicons:lamp-bulk-sharp",
	});
}

export default Component;
