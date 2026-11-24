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

.jlrxn6bdq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5V3a1 1 0 0 1 1-1h6c.409 0 .777.249.928.629l2 5a1 1 0 0 1-.221 1.078L9.414 11L13 14.586l2.293-2.293a1 1 0 0 1 1.078-.221l5 2c.38.151.629.519.629.928v6a1 1 0 0 1-1 1h-2C9.611 22 2 14.389 2 5");
}

.q00_-r66h {
  d: path("M18 2a3 3 0 1 1 0 6h-1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1Zm0 4a1 1 0 0 0 0-2h-1v2Z");
}
</style><g class="cuyn6tgcc"><path class="jlrxn6bdq"/><path class="q00_-r66h"/></g>`,
		"fallback": "coolicons:phone-parking-bulk-sharp",
	});
}

export default Component;
