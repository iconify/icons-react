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

.iv0w9bbpt {
  d: path("M7 5h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m1 17a1 1 0 0 1 0-2h3v-9a1 1 0 0 1 2 0v9h3a1 1 0 0 1 0 2Z");
}

.mnxq4l1uo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m11.293 11.707l-7-7a1.36 1.36 0 0 1-.382-1.186C4.072 2.572 5.102 2 6 2h12c.898 0 1.928.572 2.089 1.521a1.34 1.34 0 0 1-.382 1.186l-7 7a1 1 0 0 1-1.414 0");
}
</style><g class="cuyn6tgcc"><path class="mnxq4l1uo"/><path class="iv0w9bbpt"/></g>`,
		"fallback": "coolicons:martini-bulk-round",
	});
}

export default Component;
