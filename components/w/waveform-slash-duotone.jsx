import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.j15a7t1ro {
  d: path("M56 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-2.08-61.38a8 8 0 1 0-11.84 10.76L80 87.09V224a8 8 0 0 0 16 0V104.69l24 26.4V192a8 8 0 0 0 16 0v-43.31l66.08 72.69a8 8 0 1 0 11.84-10.76ZM88 44.43a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v4.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V64a8 8 0 0 0-16 0v16.43a8 8 0 0 0 8 8m40 44a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28.43a8 8 0 0 0 8 8M208 72a8 8 0 0 0-8 8v88.43a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8");
}

.xbog0vbkr {
  d: path("M208 96v64H48V96Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="xbog0vbkr"/><path class="j15a7t1ro"/></g>`,
		"fallback": "ph:waveform-slash-duotone",
	});
}

export default Component;
