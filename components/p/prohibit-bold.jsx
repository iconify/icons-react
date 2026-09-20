import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wp-l1_bej {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m84 108a83.6 83.6 0 0 1-16.75 50.28L77.72 60.75A84 84 0 0 1 212 128m-168 0a83.6 83.6 0 0 1 16.75-50.28l117.53 117.53A84 84 0 0 1 44 128");
}
</style><path class="wp-l1_bej"/>`,
		"fallback": "ph:prohibit-bold",
	});
}

export default Component;
