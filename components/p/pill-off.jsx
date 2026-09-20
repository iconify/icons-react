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

.rkh1s6xok {
  fill-rule: evenodd;
  d: path("m10.546 4.182l6.364 6.364a4.5 4.5 0 1 1-6.364 6.364l-6.364-6.364a4.5 4.5 0 1 1 6.364-6.364M13 9.5q-1-1-2.5-.5t-2 3l3.42 3.444l.006.006c.973.973 2.55.973 3.524 0l.007-.008a2.49 2.49 0 0 0-.015-3.52z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="rkh1s6xok"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:pill-off",
	});
}

export default Component;
