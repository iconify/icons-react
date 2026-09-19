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
		"content": `<style>.nmhw6dbmm {
  fill: currentColor;
  d: path("M2.27 2.27L1 3.54L20.46 23l1.27-1.27L11 11z");
}

.x2jnnpeye {
  fill: currentColor;
  d: path("m9 9l1.914 1.914L8 13.828V14h6l2 2h-3v4l-1 3l-1-3v-4H6v-3l3-3zm8-7v2l-2 1v5l3 3v2.461l-5-5.001V4h-2v4.46l-2-2V5L7 4V2z");
}
</style><path class="x2jnnpeye"/><path class="nmhw6dbmm"/>`,
		"fallback": "ic:outline-pin-off",
	});
}

export default Component;
