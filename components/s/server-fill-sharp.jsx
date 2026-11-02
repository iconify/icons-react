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
		"content": `<style>.qab42cb6h {
  fill: currentColor;
  d: path("M3 3h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-4 7h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m4 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="qab42cb6h"/>`,
		"fallback": "coolicons:server-fill-sharp",
	});
}

export default Component;
