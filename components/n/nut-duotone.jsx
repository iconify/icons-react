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

.knd-tmb-m {
  d: path("M128 80a48 48 0 1 0 48 48a48.06 48.06 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m95.68-93.85l-88-48.15a15.88 15.88 0 0 0-15.36 0l-88 48.17a16 16 0 0 0-8.32 14v95.64a16 16 0 0 0 8.32 14l88 48.17a15.88 15.88 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.18a16 16 0 0 0-8.32-14.03M128 224l-88-48.18V80.18L128 32l88 48.17v95.63Z");
}

.wc7p9dxiq {
  d: path("m219.84 73.16l-88-48.16a8 8 0 0 0-7.68 0l-88 48.18a8 8 0 0 0-4.16 7v95.64a8 8 0 0 0 4.16 7l88 48.18a8 8 0 0 0 7.68 0l88-48.18a8 8 0 0 0 4.16-7V80.18a8 8 0 0 0-4.16-7.02M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="wc7p9dxiq"/><path class="knd-tmb-m"/></g>`,
		"fallback": "ph:nut-duotone",
	});
}

export default Component;
