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
		"content": `<style>.ttb05hbuh {
  fill: currentColor;
  d: path("M15 19v-2H8.41L20 5.41L18.59 4L7 15.59V9H5v10z");
}
</style><path class="ttb05hbuh"/>`,
		"fallback": "ic:outline-south-west",
	});
}

export default Component;
