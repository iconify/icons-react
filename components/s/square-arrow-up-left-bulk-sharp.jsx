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
		"content": `<style>.bpp7y5g_r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xgpw7uedo {
  d: path("M13 10h-1.586l4.293 4.293a.999.999 0 1 1-1.414 1.414L10 11.414V13a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="xgpw7uedo"/></g>`,
		"fallback": "coolicons:square-arrow-up-left-bulk-sharp",
	});
}

export default Component;
