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

.lo2spemcq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 6a4 4 0 0 1 8 0v5a4 4 0 0 1-8 0Z");
}

.ughdv9bzg {
  d: path("M6 10v1a6 6 0 1 0 12 0v-1a1 1 0 0 1 2 0v1a8.006 8.006 0 0 1-7 7.939V21a1 1 0 0 1-2 0v-2.061A8.006 8.006 0 0 1 4 11v-1a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="lo2spemcq"/><path class="ughdv9bzg"/></g>`,
		"fallback": "coolicons:microphone-bulk",
	});
}

export default Component;
