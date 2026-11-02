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

.dji0kcbys {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Z");
}

.e1ajxz96l {
  d: path("M10.158 6.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m0 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><g class="cuyn6tgcc"><path class="dji0kcbys"/><path class="e1ajxz96l"/></g>`,
		"fallback": "coolicons:traffic-light-bulk-round",
	});
}

export default Component;
