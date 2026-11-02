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
		"content": `<style>.sf-gaf8dt {
  fill: currentColor;
  d: path("M5 11a3 3 0 0 0 3 3h8c.796 0 1.559-.316 2.121-.879A3 3 0 0 0 19 11V9a1 1 0 0 1 2 0v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9a1 1 0 0 1 2 0Z");
}
</style><path class="sf-gaf8dt"/>`,
		"fallback": "coolicons:space-bulk-round",
	});
}

export default Component;
