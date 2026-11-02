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
		"content": `<style>.ckcw0wbam {
  d: path("M16 4v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.f--irmbsa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21H8a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="f--irmbsa"/><path class="ckcw0wbam"/></g>`,
		"fallback": "coolicons:panel-right-bulk-round",
	});
}

export default Component;
