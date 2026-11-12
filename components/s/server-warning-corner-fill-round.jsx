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
		"content": `<style>.dckcj4_-p {
  fill: currentColor;
  d: path("M6 3h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m1.01 3H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M9 21H6a4 4 0 0 1 0-8h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m9-7v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0M7.01 16H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m10 4a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><path class="dckcj4_-p"/>`,
		"fallback": "coolicons:server-warning-corner-fill-round",
	});
}

export default Component;
