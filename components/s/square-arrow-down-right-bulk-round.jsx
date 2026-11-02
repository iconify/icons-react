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

.rqcrlogdz {
  d: path("M11 16a1 1 0 0 1 0-2h1.586L8.293 9.707a.999.999 0 1 1 1.414-1.414L14 12.586V11a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z");
}

.yqxcxg4xa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="yqxcxg4xa"/><path class="rqcrlogdz"/></g>`,
		"fallback": "coolicons:square-arrow-down-right-bulk-round",
	});
}

export default Component;
