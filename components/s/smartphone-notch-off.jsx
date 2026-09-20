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

.qsob0pbcl {
  fill-rule: evenodd;
  d: path("M6 0h9c1.105 0 2 .943 2 2.105v15.79C17 19.057 16.105 20 15 20H6c-1.105 0-2-.943-2-2.105V2.105C4 .943 4.895 0 6 0m1 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V2z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="qsob0pbcl"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:smartphone-notch-off",
	});
}

export default Component;
