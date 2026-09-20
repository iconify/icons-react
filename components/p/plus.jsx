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

.g3gsawfkf {
  d: path("M9 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z");
}

.xxiie10rz {
  d: path("M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z");
}
</style><g class="cuyn6tgcc"><path class="xxiie10rz"/><path class="g3gsawfkf"/></g>`,
		"fallback": "pepicons-pop:plus",
	});
}

export default Component;
