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

.zcnxjr1kl {
  d: path("M8 13V7a1 1 0 0 1 1-1h3a4 4 0 0 1 0 8h-2v3a1 1 0 0 1-2 0Zm2-1h2a1.999 1.999 0 0 0 1.732-3A2 2 0 0 0 12 8h-2Z");
}
</style><g class="cuyn6tgcc"><path class="bpp7y5g_r"/><path class="zcnxjr1kl"/></g>`,
		"fallback": "coolicons:square-parking-bulk-sharp",
	});
}

export default Component;
