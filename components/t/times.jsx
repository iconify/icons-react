import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

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

.ezimumb3m {
  d: path("M7.172 14.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414z");
}

.tbirlab4i {
  d: path("M5.757 7.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415z");
}
</style><g class="cuyn6tgcc"><path class="ezimumb3m"/><path class="tbirlab4i"/></g>`,
		"fallback": "pepicons-pop:times",
	});
}

export default Component;
