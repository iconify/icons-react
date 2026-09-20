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
		"content": `<style>.awjhrocwr {
  fill: currentColor;
  d: path("M7.289 15.289L4 12l3.289-3.288l.707.688l-2.075 2.1H13v1H5.921l2.075 2.1zM16.077 19H19V5h-2.923zm-1 1V4H20v16zM11.385 5.23V4h1.23v1.23zm0 14.77v-1.23h1.23V20zM7.692 5.23V4h1.231v1.23zm0 14.77v-1.23h1.231V20zM4 5.23V4h1.23v1.23zM4 20v-1.23h1.23V20zm12.077-1H19z");
}
</style><path class="awjhrocwr"/>`,
		"fallback": "material-symbols-light:text-select-move-back-word-outline",
	});
}

export default Component;
