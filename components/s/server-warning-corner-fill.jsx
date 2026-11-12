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
		"content": `<style>.znc4s2b0f {
  fill: currentColor;
  d: path("M5 3h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m2.01 3H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M9 21H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m9-3a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0ZM7.01 16H7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m10 4a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><path class="znc4s2b0f"/>`,
		"fallback": "coolicons:server-warning-corner-fill",
	});
}

export default Component;
