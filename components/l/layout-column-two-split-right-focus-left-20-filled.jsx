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
		"content": `<style>.wlgxvc3yd {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm7-2v5.5h6V6a2 2 0 0 0-2-2zm0 6.5V16h4a2 2 0 0 0 2-2v-3.5z");
}
</style><path class="wlgxvc3yd"/>`,
		"fallback": "fluent:layout-column-two-split-right-focus-left-20-filled",
	});
}

export default Component;
