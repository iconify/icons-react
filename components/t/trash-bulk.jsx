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
		"content": `<style>.b8xh7va0t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 5h12a1 1 0 0 1 1 1v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a1 1 0 0 1 1-1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.vbf1fnbjf {
  d: path("M4 5h3v-.001A3 3 0 0 1 10 2h4.001c1.657.001 3 1.343 2.999 3h3a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m11 0c0-.268-.108-.526-.299-.714A.96.96 0 0 0 14 4H9.999a1 1 0 0 0-.713.3A.96.96 0 0 0 9 5Z");
}
</style><g class="cuyn6tgcc"><path class="b8xh7va0t"/><path class="vbf1fnbjf"/></g>`,
		"fallback": "coolicons:trash-bulk",
	});
}

export default Component;
