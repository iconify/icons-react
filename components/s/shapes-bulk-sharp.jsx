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

.syxx7p34c {
  d: path("M12.832 9.445A1 1 0 0 1 12 11H4a1 1 0 0 1-.832-1.555l4-6a1 1 0 0 1 1.664 0ZM8 5.803L5.869 9h4.262Z");
}

.tg2t-qzsr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m8.832 3.445l4 6A1 1 0 0 1 12 11H4a1 1 0 0 1-.832-1.555l4-6a1 1 0 0 1 1.664 0M12 17a5 5 0 1 1 10.001.001A5 5 0 0 1 12 17m-9-3h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="tg2t-qzsr"/><path class="syxx7p34c"/></g>`,
		"fallback": "coolicons:shapes-bulk-sharp",
	});
}

export default Component;
