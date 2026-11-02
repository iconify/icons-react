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
		"content": `<style>.zoaz3pbkd {
  fill: currentColor;
  d: path("M4 15.171V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9.171A3.001 3.001 0 0 1 19 21H5a3 3 0 0 1-1-5.829M5 17a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z");
}
</style><path class="zoaz3pbkd"/>`,
		"fallback": "coolicons:laptop-fill",
	});
}

export default Component;
