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
		"content": `<style>.qim42yb4k {
  fill: currentColor;
  d: path("M2 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m19-1a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2ZM2 17a3 3 0 1 1 6 0a3 3 0 0 1-6 0m15-1a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="qim42yb4k"/>`,
		"fallback": "coolicons:poll-fill",
	});
}

export default Component;
