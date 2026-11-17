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
		"content": `<style>.zwnrbqbnp {
  fill: currentColor;
  d: path("M3 10V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v5Zm17.93 2A7.02 7.02 0 0 1 15 17.93V19a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1.082A6.01 6.01 0 0 1 3 12Z");
}
</style><path class="zwnrbqbnp"/>`,
		"fallback": "coolicons:toilet-fill",
	});
}

export default Component;
