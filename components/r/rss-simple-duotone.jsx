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

.ivf5ys14p {
  d: path("M224 192a8 8 0 0 1-16 0c0-79.4-64.6-144-144-144a8 8 0 0 1 0-16c88.22 0 160 71.78 160 160M64 104a8 8 0 0 0 0 16a72.08 72.08 0 0 1 72 72a8 8 0 0 0 16 0a88.1 88.1 0 0 0-88-88m4 72a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}

.xmm7cscja {
  d: path("M216 192H64V40a152 152 0 0 1 152 152");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="xmm7cscja"/><path class="ivf5ys14p"/></g>`,
		"fallback": "ph:rss-simple-duotone",
	});
}

export default Component;
