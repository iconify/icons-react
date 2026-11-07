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

.oifpvlb-e {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6.5 5.868a2 2 0 0 1 1.106-1.789l3.5-1.75a2 2 0 0 1 1.788 0l3.5 1.75A2 2 0 0 1 17.5 5.868v4.389l3.394 1.697A2 2 0 0 1 22 13.743v4.389a2 2 0 0 1-1.106 1.789l-3.5 1.75a2 2 0 0 1-1.788 0L12 19.868l-3.606 1.803a2 2 0 0 1-1.788 0l-3.5-1.75A2 2 0 0 1 2 18.132v-4.389a2 2 0 0 1 1.106-1.789L6.5 10.257Z");
}

.rsintpbpq {
  d: path("M11.106 2.329a2 2 0 0 1 1.788 0l3.5 1.75c.324.16.597.406.79.711a1 1 0 0 1-.395 1.433l-4.342 2.171a1 1 0 0 1-.894 0L7.211 6.223a1 1 0 0 1-.448-1.341c.172-.343.504-.634.843-.803ZM7.947 9.981L12 12.007l4.053-2.026a1 1 0 0 1 .894 0l3.947 1.973c.324.16.597.406.79.711a1 1 0 0 1-.395 1.433l-4.342 2.171a1 1 0 0 1-.894 0L12 14.243l-4.053 2.026a1 1 0 0 1-.894 0l-4.342-2.171a1 1 0 0 1-.448-1.341c.172-.343.504-.634.843-.803l3.947-1.973a1 1 0 0 1 .894 0");
}
</style><g class="cuyn6tgcc"><path class="oifpvlb-e"/><path class="rsintpbpq"/></g>`,
		"fallback": "coolicons:packages-bulk",
	});
}

export default Component;
