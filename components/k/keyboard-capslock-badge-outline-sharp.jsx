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
		"content": `<style>.nwurvfbog {
  fill: currentColor;
  d: path("M7.712 16h8.577v-1H7.711zm.688-3.02L12 9.4l3.6 3.58l.689-.688L12 7.985l-4.288 4.307zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="nwurvfbog"/>`,
		"fallback": "material-symbols-light:keyboard-capslock-badge-outline-sharp",
	});
}

export default Component;
