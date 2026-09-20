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
		"content": `<style>.zx3uczq7y {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 0 3 5.75v5.351a7 7 0 0 1 1.5-1.165V5.75c0-.69.56-1.25 1.25-1.25H11v1.25A2.25 2.25 0 0 0 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.187A7 7 0 0 1 12.9 21h5.351A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25zm-7.25 3.25a.75.75 0 0 1 .75.75v2.75a.75.75 0 0 1-.75.75H9.5a.75.75 0 0 1 0-1.5h1.33l-.018-.013A4.5 4.5 0 1 0 12.5 16a.75.75 0 0 1 1.5 0a6 6 0 1 1-2.5-4.874V10.5a.75.75 0 0 1 .75-.75");
}
</style><path class="zx3uczq7y"/>`,
		"fallback": "fluent:tab-desktop-arrow-clockwise-24-regular",
	});
}

export default Component;
