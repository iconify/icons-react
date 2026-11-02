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
		"content": `<style>.d9w7hbbci {
  fill: currentColor;
  d: path("M5 14h14V9a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0Z");
}
</style><path class="d9w7hbbci"/>`,
		"fallback": "coolicons:space-bulk-sharp",
	});
}

export default Component;
