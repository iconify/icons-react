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

.rt42k1imi {
  d: path("M4 8h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2");
}

.xbfr8jbdo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z");
}
</style><g class="cuyn6tgcc"><path class="xbfr8jbdo"/><path class="rt42k1imi"/></g>`,
		"fallback": "coolicons:panel-top-bulk",
	});
}

export default Component;
