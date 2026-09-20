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
		"content": `<style>.w8s5_qima {
  fill: currentColor;
  d: path("M6.4 21L5 19.6l6-6.025v-6.75L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825v6.75l6 6.025l-1.4 1.4l-5.6-5.6z");
}
</style><path class="w8s5_qima"/>`,
		"fallback": "material-symbols:merge-sharp",
	});
}

export default Component;
