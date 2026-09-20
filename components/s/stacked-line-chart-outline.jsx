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
		"content": `<style>.zw0amo67q {
  fill: currentColor;
  d: path("M3.5 21.5L2 20l7.5-7.5l4 4l7.1-8L22 9.9l-8.5 9.6l-4-4zm0-6L2 14l7.5-7.5l4 4l7.1-8L22 3.9l-8.5 9.6l-4-4z");
}
</style><path class="zw0amo67q"/>`,
		"fallback": "material-symbols:stacked-line-chart-outline",
	});
}

export default Component;
