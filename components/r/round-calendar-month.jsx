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
		"content": `<style>.jy7-r4icn {
  fill: currentColor;
  d: path("M17 2c-.55 0-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1m2 18H5V10h14zm-8-7c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 4c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m-4 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m8 0c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1");
}
</style><path class="jy7-r4icn"/>`,
		"fallback": "ic:round-calendar-month",
	});
}

export default Component;
