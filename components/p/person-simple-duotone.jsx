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

.egu3z3b4k {
  d: path("M152 48a24 24 0 1 1-24-24a24 24 0 0 1 24 24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iqjm9xbmt {
  d: path("M128 80a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m102.86 100.12a8 8 0 0 1-11 2.74c-.35-.21-35.11-20.59-83.88-22.67V149l62 69.73a8 8 0 1 1-12 10.62L128 164l-58 65.31a8 8 0 1 1-12-10.62L120 149v-36.82c-49 2.08-83.52 22.46-83.88 22.68a8 8 0 0 1-8.24-13.72C29.6 120.11 70.45 96 128 96s98.4 24.11 100.12 25.14a8 8 0 0 1 2.74 10.98");
}
</style><g class="cuyn6tgcc"><path class="egu3z3b4k"/><path class="iqjm9xbmt"/></g>`,
		"fallback": "ph:person-simple-duotone",
	});
}

export default Component;
