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
		"content": `<style>.a27nelhgg {
  d: path("m8.293 9.293l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L13 9.414V14a1 1 0 0 1-2 0V9.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414M15 21H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.r889qqats {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="r889qqats"/><path class="a27nelhgg"/></g>`,
		"fallback": "coolicons:monitor-upload-bulk-round",
	});
}

export default Component;
