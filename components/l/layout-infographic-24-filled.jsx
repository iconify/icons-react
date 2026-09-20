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
		"content": `<style>.x3pjcpsev {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zM8.5 11a3 3 0 1 0 0 6a3 3 0 0 0 0-6m5.25.5a.75.75 0 0 0-.75.75v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75m3-1.5a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 0 0-.75-.75M8.5 12.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M6.75 7a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="x3pjcpsev"/>`,
		"fallback": "fluent:layout-infographic-24-filled",
	});
}

export default Component;
