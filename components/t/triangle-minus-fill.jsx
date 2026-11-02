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
		"content": `<style>.i1o9-v-px {
  fill: currentColor;
  d: path("m14.591 4.488l7 12A2.999 2.999 0 0 1 19 21H5a2.999 2.999 0 0 1-2.591-4.512l7-12a3 3 0 0 1 5.182 0M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2");
}
</style><path class="i1o9-v-px"/>`,
		"fallback": "coolicons:triangle-minus-fill",
	});
}

export default Component;
