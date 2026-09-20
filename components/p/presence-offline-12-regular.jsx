import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j9xn9crcm {
  fill: currentColor;
  d: path("M8.03 3.97a.75.75 0 0 1 0 1.06L7.06 6l.97.97a.75.75 0 0 1-1.06 1.06L6 7.06l-.97.97a.75.75 0 0 1-1.06-1.06L4.94 6l-.97-.97a.75.75 0 0 1 1.06-1.06l.97.97l.97-.97a.75.75 0 0 1 1.06 0M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6m6-4.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9");
}
</style><path class="j9xn9crcm"/>`,
		"fallback": "fluent:presence-offline-12-regular",
	});
}

export default Component;
