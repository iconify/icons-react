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
		"content": `<style>.b3pa1xrgi {
  fill: currentColor;
  d: path("M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7 7 0 0 1 12 9.58");
}
</style><path class="b3pa1xrgi"/>`,
		"fallback": "ic:outline-room-service",
	});
}

export default Component;
