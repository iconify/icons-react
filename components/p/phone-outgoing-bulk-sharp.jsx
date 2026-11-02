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

.zghu3ubgy {
  d: path("M22 7a1 1 0 0 1-2 0V5.414l-4.293 4.293a.999.999 0 1 1-1.414-1.414L18.586 4H17a1 1 0 0 1 0-2h4a.997.997 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="jlrxn6bdq"/><path class="zghu3ubgy"/></g>`,
		"fallback": "coolicons:phone-outgoing-bulk-sharp",
	});
}

export default Component;
