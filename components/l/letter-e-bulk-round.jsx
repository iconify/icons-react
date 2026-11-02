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
		"content": `<style>.it9b3kbdf {
  fill: currentColor;
  d: path("M8 5v6h7a1 1 0 0 1 0 2H8v6h9a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2Z");
}
</style><path class="it9b3kbdf"/>`,
		"fallback": "coolicons:letter-e-bulk-round",
	});
}

export default Component;
