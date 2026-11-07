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

.x9qbi2awd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="x9qbi2awd"/><path class="a27nelhgg"/></g>`,
		"fallback": "coolicons:monitor-upload-bulk",
	});
}

export default Component;
