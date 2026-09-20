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
		"content": `<style>.injwr0bix {
  fill: currentColor;
  d: path("M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.5 5.5 0 0 1-.657-1H5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5.707a5.5 5.5 0 0 1 1-.185V3.5A1.5 1.5 0 0 0 12.5 2zM9 14.5q0 .252.022.5H7.5a.5.5 0 0 1 0-1h1.522a6 6 0 0 0-.022.5m10 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="injwr0bix"/>`,
		"fallback": "fluent:phone-screen-time-20-regular",
	});
}

export default Component;
