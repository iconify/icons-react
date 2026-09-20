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
		"content": `<style>.ji99f73bm {
  fill: currentColor;
  d: path("M7 2a1 1 0 0 1 .94.658l2.882 7.926l-1.11 2.798L9.209 12H4.792l-.852 2.342a1 1 0 0 1-1.88-.684l4.001-11A1 1 0 0 1 7.001 2m-1.48 8h2.962L7 5.926zm9.848-3.472a1 1 0 0 0-1.86 0L8.151 20.022h-.15a1 1 0 1 0 0 2H11a1 1 0 0 0 0-2h-.697L11.106 18h6.653l.8 2.023H18a1 1 0 0 0 0 2h3.009a1 1 0 0 0 0-2h-.298zM16.967 16H11.9l2.537-6.39z");
}
</style><path class="ji99f73bm"/>`,
		"fallback": "fluent:text-font-24-filled",
	});
}

export default Component;
