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

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.xxiie10rz {
  d: path("M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z");
}
</style><g class="cuyn6tgcc"><path class="xxiie10rz"/><path class="g3gsawfkf"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:plus-off",
	});
}

export default Component;
