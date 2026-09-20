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
		"content": `<style>.osnzigb2e {
  fill: currentColor;
  d: path("M13 22v-4l4-1l-4-1v-4l10 5zM3 21v-5.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V4h6q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h6v9.25l-2-1V6h-6V4q0-.2-.15-.35t-.35-.15t-.35.15T11 4v2H5v2.2q1.35.5 2.175 1.675T8 12.5q0 1.425-.825 2.6T5 16.8V19h2.125q.425-1.125 1.45-1.963T11 16.05v2q-1 .2-1.6.938T8.8 21zm8.5-9.75");
}
</style><path class="osnzigb2e"/>`,
		"fallback": "material-symbols:send-time-extension-outline-sharp",
	});
}

export default Component;
