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

.lrv276qwq {
  d: path("M5 15h14a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6m0 4h14a1 1 0 0 0 1-1v-.001A1 1 0 0 0 19 17H4.999A1 1 0 0 0 5 19");
}

.uwvy5p-_w {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 17H5a1 1 0 0 1-1-1V8a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v8a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="uwvy5p-_w"/><path class="lrv276qwq"/></g>`,
		"fallback": "coolicons:laptop-bulk-round",
	});
}

export default Component;
