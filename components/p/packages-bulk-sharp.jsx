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

.eipxix6yg {
  d: path("m12.447 2.106l4.5 2.25a.998.998 0 0 1 0 1.788l-4.5 2.25a1 1 0 0 1-.894 0l-4.5-2.25a.998.998 0 0 1 0-1.788l4.5-2.25a1 1 0 0 1 .894 0m-4.5 7.875L12 12.007l4.053-2.026a1 1 0 0 1 .894 0l4.5 2.25a.998.998 0 0 1 0 1.788l-4.5 2.25a1 1 0 0 1-.894 0L12 14.243l-4.053 2.026a1 1 0 0 1-.894 0l-4.5-2.25a.998.998 0 0 1 0-1.788l4.5-2.25a1 1 0 0 1 .894 0");
}

.tq0ry65-v {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.447 2.106l4.5 2.25a1 1 0 0 1 .553.894v5.007l3.947 1.974a1 1 0 0 1 .553.894v5.625a1 1 0 0 1-.553.894l-4.5 2.25a1 1 0 0 1-.894 0L12 19.868l-4.053 2.026a1 1 0 0 1-.894 0l-4.5-2.25A1 1 0 0 1 2 18.75v-5.625c0-.379.214-.725.553-.894L6.5 10.257V5.25c0-.379.214-.725.553-.894l4.5-2.25a1 1 0 0 1 .894 0");
}
</style><g class="cuyn6tgcc"><path class="tq0ry65-v"/><path class="eipxix6yg"/></g>`,
		"fallback": "coolicons:packages-bulk-sharp",
	});
}

export default Component;
