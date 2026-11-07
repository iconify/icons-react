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
		"content": `<style>.cn7m2pb8b {
  fill: currentColor;
  d: path("M16 2a3 3 0 0 1 3 3v11h1a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H4a2 2 0 0 1-2-2V5a3 3 0 0 1 3-3ZM6 6V5a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0m7 12a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="cn7m2pb8b"/>`,
		"fallback": "coolicons:scroll-fill",
	});
}

export default Component;
