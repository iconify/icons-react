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
		"content": `<style>.cbp11bc5b {
  fill: currentColor;
  d: path("M13 12.5v-6c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5v10.74l-4.04-.85l-1.21 1.23L10.13 23h8.97l1.09-7.64l-6.11-2.86z");
}

.y4c7-zwqc {
  fill: currentColor;
  d: path("M20.13 3.87C18.69 2.17 15.6 1 12 1S5.31 2.17 3.87 3.87L2 2v5h5L4.93 4.93c1-1.29 3.7-2.43 7.07-2.43s6.07 1.14 7.07 2.43L17 7h5V2z");
}
</style><path class="y4c7-zwqc"/><path class="cbp11bc5b"/>`,
		"fallback": "ic:sharp-swipe",
	});
}

export default Component;
