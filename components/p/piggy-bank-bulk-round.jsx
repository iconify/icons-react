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

.fs7dp88vp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m9 15H8a5 5 0 0 1 0-10h4.586l2.707-2.707A1 1 0 0 1 17 8v2.535A4 4 0 0 1 18.465 12H19a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.535A4 4 0 0 1 15 20");
}

.hoi9c7gee {
  d: path("M6 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m2 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m7.01 8a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2ZM9 21a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm6 0a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="fs7dp88vp"/><path class="hoi9c7gee"/></g>`,
		"fallback": "coolicons:piggy-bank-bulk-round",
	});
}

export default Component;
