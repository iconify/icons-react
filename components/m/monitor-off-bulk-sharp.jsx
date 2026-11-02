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

.n2tzskgxj {
  d: path("m3.707 1.293l19 19a.999.999 0 1 1-1.414 1.414l-19-19a.999.999 0 1 1 1.414-1.414M9 19h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}

.qqzy6bbyg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4 3l15 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 12.757L8.243 3H20a1 1 0 0 1 1 1Z");
}
</style><g class="cuyn6tgcc"><path class="qqzy6bbyg"/><path class="n2tzskgxj"/></g>`,
		"fallback": "coolicons:monitor-off-bulk-sharp",
	});
}

export default Component;
