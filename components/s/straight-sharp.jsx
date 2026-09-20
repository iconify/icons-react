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
		"content": `<style>.r7un6_b_b {
  fill: currentColor;
  d: path("M11 21V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V21z");
}
</style><path class="r7un6_b_b"/>`,
		"fallback": "material-symbols:straight-sharp",
	});
}

export default Component;
