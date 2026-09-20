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

.lw-0x9r4v {
  fill-rule: evenodd;
  d: path("M15.156 16.992A2 2 0 0 1 13.42 18H6.58a2 2 0 0 1-1.736-1.008l-3.429-6a2 2 0 0 1 0-1.984l3.429-6A2 2 0 0 1 6.58 2h6.84a2 2 0 0 1 1.736 1.008l3.429 6a2 2 0 0 1 0 1.984zM6.58 16h6.84l3.428-6l-3.428-6H6.58l-3.428 6z");
}

.w_xpadbpb {
  fill-rule: evenodd;
  d: path("M10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="lw-0x9r4v"/><path clip-rule="evenodd" class="w_xpadbpb"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:nut-off",
	});
}

export default Component;
