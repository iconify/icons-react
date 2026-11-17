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

.kf3781y5d {
  d: path("M11 5h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2m2.86 7.384l2.281.326a1.001 1.001 0 0 1 .566 1.697l-1.636 1.636l.315 1.893a1 1 0 0 1-.392.968a1 1 0 0 1-1.041.09L12 18.018l-1.953.976a1 1 0 0 1-1.041-.09a1 1 0 0 1-.392-.968l.315-1.893l-1.636-1.636a1.001 1.001 0 0 1 .566-1.697l2.281-.326l.966-1.931a.998.998 0 0 1 1.788 0Z");
}

.uneb3jwwe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 2c.265 0 .52.105.707.293l4 4A1 1 0 0 1 20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7c0-.265.105-.52.293-.707l4-4A1 1 0 0 1 9 2Zm-3 8.9l-1.2 2.4l-2.8.4l2 2l-.4 2.4l2.4-1.2l2.4 1.2l-.4-2.4l2-2l-2.8-.4Z");
}
</style><g class="cuyn6tgcc"><path class="uneb3jwwe"/><path class="kf3781y5d"/></g>`,
		"fallback": "coolicons:tag-star-bulk-sharp",
	});
}

export default Component;
