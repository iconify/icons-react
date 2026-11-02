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

.dcvx-qzrl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z");
}

.pumpzpciy {
  d: path("M20 8a1 1 0 0 1 0 2h-7v4h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7v-4H4a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="dcvx-qzrl"/><path class="pumpzpciy"/></g>`,
		"fallback": "coolicons:table-cells-split-bulk",
	});
}

export default Component;
