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

.qebz58hxe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="qebz58hxe"/><path class="chmvdccpm"/></g>`,
		"fallback": "coolicons:textarea-bulk",
	});
}

export default Component;
