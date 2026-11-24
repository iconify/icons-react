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

.hj0t4uosh {
  d: path("m2.707 2.293l19 19a.999.999 0 1 1-1.414 1.414l-19-19a.999.999 0 1 1 1.414-1.414m5.757 2.585a1 1 0 0 1 0-1.414a5.003 5.003 0 0 1 7.072 0A4.98 4.98 0 0 1 17 7v2a1 1 0 0 1-2 0V7a3 3 0 0 0-5.12-2.121a1 1 0 0 1-1.415.001Z");
}

.tobnp4bek {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.707 21.707A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3Zm.293-3.95L11.243 8H20a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="tobnp4bek"/><path class="hj0t4uosh"/></g>`,
		"fallback": "coolicons:lock-off-bulk-sharp",
	});
}

export default Component;
