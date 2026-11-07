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
		"content": `<style>.c07hiv7zv {
  d: path("M3.707 4.293L9.414 10h5.172l5.707-5.707a.999.999 0 1 1 1.414 1.414l-6 6A1 1 0 0 1 15 12H9a1 1 0 0 1-.707-.293l-6-6a.999.999 0 1 1 1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.p7qta0bol {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 20H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="p7qta0bol"/><path class="c07hiv7zv"/></g>`,
		"fallback": "coolicons:mail-bulk-sharp",
	});
}

export default Component;
