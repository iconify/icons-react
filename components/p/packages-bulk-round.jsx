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

.uew3pc5ak {
  d: path("M10.658 2.553a3 3 0 0 1 2.684 0l2.5 1.25c.485.239.895.608 1.185 1.066a1 1 0 0 1-.395 1.433l-4.185 2.092a1 1 0 0 1-.894 0L7.368 6.302a1 1 0 0 1-.395-1.433c.29-.458.7-.827 1.185-1.066ZM7.947 9.981L12 12.007l4.053-2.026a1 1 0 0 1 .894 0l3.395 1.697c.485.239.895.608 1.185 1.066a1 1 0 0 1-.395 1.433l-4.185 2.092a1 1 0 0 1-.894 0L12 14.243l-4.053 2.026a1 1 0 0 1-.894 0l-4.185-2.092a.997.997 0 0 1-.395-1.433c.29-.458.7-.827 1.185-1.066l3.395-1.697a1 1 0 0 1 .894 0");
}

.xrgrk9tju {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6.5 6.486a3 3 0 0 1 1.658-2.683l2.5-1.25a3 3 0 0 1 2.684 0l2.5 1.25A3 3 0 0 1 17.5 6.486v3.771l2.842 1.421A3 3 0 0 1 22 14.361v3.153a3 3 0 0 1-1.658 2.683l-2.5 1.25a3 3 0 0 1-2.684 0L12 19.868l-3.158 1.579a3 3 0 0 1-2.684 0l-2.5-1.25A3 3 0 0 1 2 17.514v-3.153a3 3 0 0 1 1.658-2.683L6.5 10.257Z");
}
</style><g class="cuyn6tgcc"><path class="xrgrk9tju"/><path class="uew3pc5ak"/></g>`,
		"fallback": "coolicons:packages-bulk-round",
	});
}

export default Component;
