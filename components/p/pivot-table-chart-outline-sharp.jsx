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
		"content": `<style>.p3mnhrg8j {
  fill: currentColor;
  d: path("M10 8V3h11v5zM3 21V10h5v11zM3 8V3h5v5zm10 14l-4-4l4-4l1.4 1.4l-1.55 1.6H17v-4.2l-1.6 1.6L14 13l4-4l4 4l-1.4 1.4l-1.6-1.6V19h-6.15l1.55 1.6z");
}
</style><path class="p3mnhrg8j"/>`,
		"fallback": "material-symbols:pivot-table-chart-outline-sharp",
	});
}

export default Component;
