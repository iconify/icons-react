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

.pwd407ban {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1");
}

.vsw7y8i0v {
  d: path("M8 10a4 4 0 1 1 8 0a4 4 0 0 1-8 0m2 0a2 2 0 1 0 3.999.001A2 2 0 0 0 10 10m5 6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="pwd407ban"/><path class="vsw7y8i0v"/></g>`,
		"fallback": "coolicons:passport-bulk-sharp",
	});
}

export default Component;
