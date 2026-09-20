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

.d2kvgvbvc {
  fill-rule: evenodd;
}

.qx0owhb7f {
  d: path("M14.5 0h-9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-9 18V2h9v16z");
}

.rr6x40bzj {
  d: path("M7.5 3.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="qx0owhb7f"/><path class="rr6x40bzj"/></g><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:smartphone-cutout-off",
	});
}

export default Component;
