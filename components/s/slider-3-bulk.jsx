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

.jb83psb2t {
  d: path("M10 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm11 0a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2Zm-5 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm5 0a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2ZM7 17a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm14 2H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2");
}

.s2gru4blp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 8a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Zm6 6a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Zm-9 6a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="s2gru4blp"/><path class="jb83psb2t"/></g>`,
		"fallback": "coolicons:slider-3-bulk",
	});
}

export default Component;
