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
		"content": `<style>.a37qc8bpe {
  d: path("M192 208h-40L64 48h40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.a3pi8_bav {
  d: path("M216 40h-48a8 8 0 0 0 0 16h16v120.85L111 44.14a8 8 0 0 0-7-4.14H40a8 8 0 0 0 0 16h16v144H40a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16H72V79.15l73 132.71a8 8 0 0 0 7 4.14h40a8 8 0 0 0 8-8V56h16a8 8 0 0 0 0-16m-59.27 160L77.53 56h21.74l79.2 144Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="a37qc8bpe"/><path class="a3pi8_bav"/></g>`,
		"fallback": "ph:notion-logo-duotone",
	});
}

export default Component;
