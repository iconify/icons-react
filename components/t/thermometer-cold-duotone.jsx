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

.p8ehyicgk {
  d: path("M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0m-32 70a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q1k1jbcvg {
  d: path("m248.91 77.72l-20 6.49l12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17l-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17l-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM152 184a32 32 0 1 1-40-31v-33a8 8 0 0 1 16 0v33a32.06 32.06 0 0 1 24 31m-16 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m48 0a64 64 0 1 1-104-50V48a40 40 0 0 1 80 0v86a64.08 64.08 0 0 1 24 50m-16 0a48.08 48.08 0 0 0-20.58-39.4A8 8 0 0 1 144 138V48a24 24 0 0 0-48 0v90a8 8 0 0 1-3.42 6.56A48 48 0 1 0 168 184");
}
</style><g class="cuyn6tgcc"><path class="p8ehyicgk"/><path class="q1k1jbcvg"/></g>`,
		"fallback": "ph:thermometer-cold-duotone",
	});
}

export default Component;
