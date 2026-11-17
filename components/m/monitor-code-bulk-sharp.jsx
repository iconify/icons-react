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
		"content": `<style>.biqhf6bic {
  d: path("m9.414 10.5l1.293 1.293a.999.999 0 1 1-1.414 1.414l-2-2a.997.997 0 0 1 0-1.414l2-2a.999.999 0 1 1 1.414 1.414Zm5.293-2.707l2 2a1 1 0 0 1 0 1.414l-2 2a.999.999 0 1 1-1.414-1.414l1.293-1.293l-1.293-1.293a.999.999 0 1 1 1.414-1.414M15 19a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.sq2a32-oo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="sq2a32-oo"/><path class="biqhf6bic"/></g>`,
		"fallback": "coolicons:monitor-code-bulk-sharp",
	});
}

export default Component;
