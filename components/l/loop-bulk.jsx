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

.d5yxe17qb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.zi79lybxv {
  d: path("M15 17h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a.997.997 0 0 0-1 1v8a1 1 0 0 0 1 1h3.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L8.586 19H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="d5yxe17qb"/><path class="zi79lybxv"/></g>`,
		"fallback": "coolicons:loop-bulk",
	});
}

export default Component;
