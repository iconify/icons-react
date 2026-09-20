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
		"content": `<style>.vins6khmq {
  fill: currentColor;
  d: path("M9 15.348L12.348 12L9 8.652L5.652 12zm0 1.421L4.23 12L9 7.23l4.27 4.27h7.653v1h-7.654zM9 12");
}
</style><path class="vins6khmq"/>`,
		"fallback": "material-symbols-light:line-start-diamond-outline",
	});
}

export default Component;
