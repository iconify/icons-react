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

.o516xlv3h {
  d: path("M20 5a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}

.wn8gfbbmf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m5.414 12l3.293 3.293a.999.999 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a.999.999 0 1 1 1.414 1.414Z");
}
</style><g class="cuyn6tgcc"><path class="wn8gfbbmf"/><path class="o516xlv3h"/></g>`,
		"fallback": "coolicons:outdent-bulk-round",
	});
}

export default Component;
