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
		"content": `<style>.gxdkzc2ng {
  fill: currentColor;
  d: path("M4 21V3h16v10H6v2h5v2H6v2h5v2zm11.4 0l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4zM6 11h5V9H6zm7 0h5V9h-5zM6 7h5V5H6zm7 0h5V5h-5z");
}
</style><path class="gxdkzc2ng"/>`,
		"fallback": "material-symbols:rubric",
	});
}

export default Component;
