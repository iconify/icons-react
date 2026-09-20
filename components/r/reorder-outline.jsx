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
		"content": `<style>.c7n1b4iis {
  fill: currentColor;
  d: path("M3 19v-2h18v2zm0-4v-2h18v2zm0-4V9h18v2zm0-4V5h18v2z");
}
</style><path class="c7n1b4iis"/>`,
		"fallback": "material-symbols:reorder-outline",
	});
}

export default Component;
