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
		"content": `<style>.g_y8p2bjr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.5 7.25h-.75V4.5q0-1.75-1.75-1.75H8q-1.75 0-1.75 1.75v2.75H5.5q-1.139 0-1.945.805Q2.75 8.861 2.75 10v5q0 2.75 2.75 2.75h.75v1q0 2.5 2.5 2.5h6.5q2.5 0 2.5-2.5v-1h.75q2.75 0 2.75-2.75v-5q0-2.75-2.75-2.75M7.75 4.5v2.75h8.5V4.5q0-.25-.25-.25H8q-.25 0-.25.25");
}
</style><path class="g_y8p2bjr"/>`,
		"fallback": "uix-solid:pin-print",
	});
}

export default Component;
