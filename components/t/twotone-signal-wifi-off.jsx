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
		"content": `<style>.eb2pcoj4l {
  fill: currentColor;
  d: path("M23.64 7c-.45-.34-4.93-4-11.64-4c-1.32 0-2.55.14-3.69.38L18.43 13.5zM3.41 1.31L2 2.72l2.05 2.05C1.91 5.76.59 6.82.36 7L12 21.5l3.91-4.87l3.32 3.32l1.41-1.41z");
}
</style><path class="eb2pcoj4l"/>`,
		"fallback": "ic:twotone-signal-wifi-off",
	});
}

export default Component;
