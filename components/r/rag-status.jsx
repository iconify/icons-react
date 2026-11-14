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
		"content": `<style>.dt-ex-t_o {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 5.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.e_19yjbwc {
  d: path("M7 2h10v20H7Z");
}

.j2iwrcc2y {
  fill: currentColor;
  d: path("M10 6.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_19yjbwc"/><path class="j2iwrcc2y"/><path class="dt-ex-t_o"/></g>`,
		"fallback": "uix-sharp:rag-status",
	});
}

export default Component;
