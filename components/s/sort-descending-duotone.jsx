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

.hf0da8bxt {
  d: path("M40 128a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8m8-56h56a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16m136 112H48a8 8 0 0 0 0 16h136a8 8 0 0 0 0-16m45.66-101.66l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32L176 67.31V144a8 8 0 0 0 16 0V67.31l26.34 26.35a8 8 0 0 0 11.32-11.32");
}

.kehrv6bjc {
  d: path("M224 88v88a16 16 0 0 1-16 16H48V64h152Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="kehrv6bjc"/><path class="hf0da8bxt"/></g>`,
		"fallback": "ph:sort-descending-duotone",
	});
}

export default Component;
