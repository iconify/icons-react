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
		"content": `<style>.qh_rg7z4b {
  fill: currentColor;
  d: path("M21 3H5.83L21 18.17zM2.81 2.81L1.39 4.22L3 5.83V21h15.17l1.61 1.61l1.41-1.41zM6 17l3-4l2.25 3l.82-1.1l2.1 2.1z");
}
</style><path class="qh_rg7z4b"/>`,
		"fallback": "ic:sharp-hide-image",
	});
}

export default Component;
