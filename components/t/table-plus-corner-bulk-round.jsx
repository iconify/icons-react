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
		"content": `<style>.bbr2hgbrt {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10 9v11a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.poslm8w5j {
  d: path("M13 4v4h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7V4a1 1 0 0 1 2 0m5 12h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0Zm-9-2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bbr2hgbrt"/><path class="poslm8w5j"/></g>`,
		"fallback": "coolicons:table-plus-corner-bulk-round",
	});
}

export default Component;
