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

.s68i1cw-x {
  d: path("m10 15.97l-4.295 1.915a1 1 0 0 1-1.402-1.018l.494-4.677L1.65 8.698a1 1 0 0 1 .535-1.647l4.6-.976L9.134 2a1 1 0 0 1 1.732 0l2.35 4.074l4.6.976a1 1 0 0 1 .535 1.647l-3.148 3.494l.494 4.676a1 1 0 0 1-1.402 1.018z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="s68i1cw-x"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:star-filled-off",
	});
}

export default Component;
