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
		"content": `<style>.ivlbszb4w {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-5H5zm0-7h14V5H5zm0 0V5z");
}
</style><path class="ivlbszb4w"/>`,
		"fallback": "material-symbols:scrollable-header-outline-sharp",
	});
}

export default Component;
