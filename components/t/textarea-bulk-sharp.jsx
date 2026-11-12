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
		"content": `<style>.chmvdccpm {
  d: path("M16 5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm-6 4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm8.293 3.293a.999.999 0 1 1 1.414 1.414l-6 6a.999.999 0 1 1-1.414-1.414Zm0 5a.999.999 0 1 1 1.414 1.414l-1 1a.999.999 0 1 1-1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.td1bzxb2d {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="td1bzxb2d"/><path class="chmvdccpm"/></g>`,
		"fallback": "coolicons:textarea-bulk-sharp",
	});
}

export default Component;
