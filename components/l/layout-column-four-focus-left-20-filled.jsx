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
		"content": `<style>.famw1sl5b {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 3a2 2 0 0 0-2-2h-.5v12h.5a2 2 0 0 0 2-2zm-3.5 10V4H10v12zm-6 0H9V4H6.5z");
}
</style><path class="famw1sl5b"/>`,
		"fallback": "fluent:layout-column-four-focus-left-20-filled",
	});
}

export default Component;
