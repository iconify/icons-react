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

.g8no66bjq {
  d: path("M9 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8 6a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6h3.22c.236-.513.637-.935 1.104-1.246c1.513-1.009 3.839-1.009 5.352 0c.467.311.868.733 1.104 1.246ZM4.999 17A1 1 0 0 0 5 19h14a1 1 0 0 0 1-1v-.001A1 1 0 0 0 19 17Z");
}

.t6x5jw7sa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M19 17H5a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="t6x5jw7sa"/><path class="g8no66bjq"/></g>`,
		"fallback": "coolicons:laptop-user-bulk",
	});
}

export default Component;
