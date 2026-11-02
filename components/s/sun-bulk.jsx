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

.s9se1bbgx {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.v4-qxiega {
  d: path("M11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm5.243 3.343l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414a.999.999 0 1 1-1.414-1.414m-9.9 1.414L4.929 6.343a.999.999 0 1 1 1.414-1.414l1.414 1.414a.999.999 0 1 1-1.414 1.414M3 13a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm16-2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2M7.757 17.657l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a.999.999 0 1 1 1.414 1.414m9.9-1.414l1.414 1.414a.999.999 0 1 1-1.414 1.414l-1.414-1.414a.999.999 0 1 1 1.414-1.414M13 21a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="s9se1bbgx"/><path class="v4-qxiega"/></g>`,
		"fallback": "coolicons:sun-bulk",
	});
}

export default Component;
