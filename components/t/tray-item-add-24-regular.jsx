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
		"content": `<style>.iy5w8sbsl {
  fill: currentColor;
  d: path("M14 3.5v2h3.5v-2zm-1.5-.25c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.5C19 6.44 18.44 7 17.75 7h-4c-.69 0-1.25-.56-1.25-1.25zm3.25 5.25a.75.75 0 0 1 .75.75v6.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L15 15.94V9.25a.75.75 0 0 1 .75-.75M6.5 15v2H10v-2zM5 14.75c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-4c-.69 0-1.25-.56-1.25-1.25zM2.75 16a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 1.5 0v2a2.75 2.75 0 0 1-2.75 2.75H4.75A2.75 2.75 0 0 1 2 18.75v-2a.75.75 0 0 1 .75-.75");
}
</style><path class="iy5w8sbsl"/>`,
		"fallback": "fluent:tray-item-add-24-regular",
	});
}

export default Component;
