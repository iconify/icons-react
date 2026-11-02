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

.hu3ewylxy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 9v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a5 5 0 0 1 5-5h14a1 1 0 0 1 1 1");
}

.zppqoo85k {
  d: path("M16 9V3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v5a1 1 0 0 1-2 0m-4 4v8a1 1 0 0 1-2 0v-8a3 3 0 0 0-3-3a1 1 0 0 1 0-2a4.9 4.9 0 0 1 1.946.393a5 5 0 0 1 1.589 1.072A4.97 4.97 0 0 1 12 13");
}
</style><g class="cuyn6tgcc"><path class="hu3ewylxy"/><path class="zppqoo85k"/></g>`,
		"fallback": "coolicons:mailbox-bulk-sharp",
	});
}

export default Component;
