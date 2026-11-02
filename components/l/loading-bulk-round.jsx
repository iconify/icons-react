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

.nacd-ebdq {
  d: path("M16.158 9.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-12 4a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}

.u2c5tobtk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10.158 11.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><g class="cuyn6tgcc"><path class="u2c5tobtk"/><path class="nacd-ebdq"/></g>`,
		"fallback": "coolicons:loading-bulk-round",
	});
}

export default Component;
