import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cnxly5oyx {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4.99 11a3 3 0 0 1-2.236-1h6.736a3.5 3.5 0 0 0 3.5-3.5v-1.201q.008-.15.008-.299V5.772c.61.549.992 1.344.992 2.228v4.5a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="cnxly5oyx"/>`,
		"fallback": "fluent:select-all-off-20-filled",
	});
}

export default Component;
