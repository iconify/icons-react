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
		"content": `<style>.rsua6gmxm {
  fill: currentColor;
  d: path("M20 5.41L18.59 4L7 15.59V9H5v10h10v-2H8.41z");
}
</style><path class="rsua6gmxm"/>`,
		"fallback": "ic:outline-call-received",
	});
}

export default Component;
