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

.n6y3o9bhz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 5v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8c0-1.039.578-1.992 1.293-2.707l2-2C8.008 2.578 8.961 2 10 2h7a3 3 0 0 1 3 3");
}

.nbiuz816b {
  d: path("M11 10a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm3 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm3 0a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="n6y3o9bhz"/><path class="nbiuz816b"/></g>`,
		"fallback": "coolicons:sd-card-bulk",
	});
}

export default Component;
