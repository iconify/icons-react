import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qtnzyrb4g {
  fill: currentColor;
  d: path("M3.5 2A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H7v-2a2 2 0 0 1 2-2h5V4.5A2.5 2.5 0 0 0 11.5 2zm.146 2.646a.5.5 0 0 1 .708 0L6 6.293V5.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.793L3.646 5.354a.5.5 0 0 1 0-.708M8 10a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z");
}
</style><path class="qtnzyrb4g"/>`,
		"fallback": "fluent:picture-in-picture-enter-16-filled",
	});
}

export default Component;
