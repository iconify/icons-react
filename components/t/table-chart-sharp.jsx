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
		"content": `<style>.h2a8yba1e {
  fill: currentColor;
  d: path("M4 8.5V4h16v4.5zM4 20V9.5h3.885V20zm12.116 0V9.5H20V20zm-7.231 0V9.5h6.23V20z");
}
</style><path class="h2a8yba1e"/>`,
		"fallback": "material-symbols-light:table-chart-sharp",
	});
}

export default Component;
