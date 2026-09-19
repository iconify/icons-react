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
		"content": `<style>.qyip1_bgz {
  fill: currentColor;
  d: path("M22 4H2.01v16H22zm-2 4l-8 5l-8-5V6l8 5l8-5z");
}
</style><path class="qyip1_bgz"/>`,
		"fallback": "ic:sharp-local-post-office",
	});
}

export default Component;
