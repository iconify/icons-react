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
		"content": `<style>.emosk2bet {
  fill: currentColor;
  d: path("M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3m0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z");
}
</style><path class="emosk2bet"/>`,
		"fallback": "ic:outline-pause-presentation",
	});
}

export default Component;
