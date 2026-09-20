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
		"content": `<style>.zsgddb5ft {
  fill: currentColor;
  d: path("M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 0 0 0-1.5H5.75A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H7.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25zm8-2.75a.75.75 0 0 0 0 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 0 0 0 1.5h1.75A2.75 2.75 0 0 0 17 14.25v-8.5A2.75 2.75 0 0 0 14.25 3zm-2 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H10.5z");
}
</style><path class="zsgddb5ft"/>`,
		"fallback": "fluent:shifts-open-20-filled",
	});
}

export default Component;
