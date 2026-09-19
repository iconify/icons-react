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
		"content": `<style>.fpu2j_rvr {
  fill: currentColor;
  d: path("M19 14v4h-2v-4zM7 14v4H6c-.55 0-1-.45-1-1v-3zm5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9");
}
</style><path class="fpu2j_rvr"/>`,
		"fallback": "ic:outline-headset-mic",
	});
}

export default Component;
