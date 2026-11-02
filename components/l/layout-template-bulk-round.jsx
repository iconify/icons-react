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

.jcjgzh1ki {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 15a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm12 0a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0Z");
}

.xituel23w {
  d: path("M6 3h12a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M5 7a.997.997 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6a.997.997 0 0 0-1 1Z");
}
</style><g class="cuyn6tgcc"><path class="jcjgzh1ki"/><path class="xituel23w"/></g>`,
		"fallback": "coolicons:layout-template-bulk-round",
	});
}

export default Component;
