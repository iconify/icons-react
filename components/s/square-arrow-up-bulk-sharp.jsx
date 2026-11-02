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

.mqx236b_g {
  d: path("M14.293 11.707L13 10.414V16a1 1 0 0 1-2 0v-5.586l-1.293 1.293a.999.999 0 1 1-1.414-1.414l3-3a.997.997 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="mqx236b_g"/></g>`,
		"fallback": "coolicons:square-arrow-up-bulk-sharp",
	});
}

export default Component;
