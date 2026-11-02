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

.xdlono2po {
  d: path("M16.293 2.293a.999.999 0 1 1 1.414 1.414l-14 14a.999.999 0 1 1-1.414-1.414Zm4 4a.999.999 0 1 1 1.414 1.414l-14 14a.999.999 0 1 1-1.414-1.414Z");
}

.y8cilttfq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m15.707 4.293l6 6a.999.999 0 1 1-1.414 1.414l-8-8a.999.999 0 1 1 1.414-1.414Zm-5 5l6 6a.999.999 0 1 1-1.414 1.414l-8-8a.999.999 0 1 1 1.414-1.414Zm-5 5l6 6a.999.999 0 1 1-1.414 1.414l-8-8a.999.999 0 1 1 1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="y8cilttfq"/><path class="xdlono2po"/></g>`,
		"fallback": "coolicons:train-track-bulk-sharp",
	});
}

export default Component;
