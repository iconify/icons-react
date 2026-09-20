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
		"content": `<style>.exkmwtb9n {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1.817-1H20V6h-4.844l2.248 8.692z");
}
</style><path class="exkmwtb9n"/>`,
		"fallback": "material-symbols-light:transition-chop-sharp",
	});
}

export default Component;
