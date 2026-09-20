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
		"content": `<style>.v04t78brx {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 8.5h14V5H5zM5 19h2.885V9.5H5zm11.116 0H19V9.5h-2.884zm-7.231 0h6.23V9.5h-6.23z");
}
</style><path class="v04t78brx"/>`,
		"fallback": "material-symbols-light:table-chart-outline-sharp",
	});
}

export default Component;
