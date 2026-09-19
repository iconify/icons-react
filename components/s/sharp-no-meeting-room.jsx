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
		"content": `<style>.dgbaxfbqp {
  fill: currentColor;
  d: path("M14 6h3v7.88l2 2V4h-5V3H6.12L14 10.88zm-2 5.71V13h-2v-2h1.29L2.41 2.13L1 3.54l4 4V19H3v2h11v-4.46L20.46 23l1.41-1.41z");
}
</style><path class="dgbaxfbqp"/>`,
		"fallback": "ic:sharp-no-meeting-room",
	});
}

export default Component;
