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
		"content": `<style>.bd400ybwz {
  fill: currentColor;
  d: path("M7.4 18.4L6 17l6-6l6 6l-1.4 1.4l-4.6-4.575zm0-6L6 11l6-6l6 6l-1.4 1.4L12 7.825z");
}
</style><path class="bd400ybwz"/>`,
		"fallback": "material-symbols:stat-2-outline",
	});
}

export default Component;
