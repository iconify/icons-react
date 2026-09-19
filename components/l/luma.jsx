import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ygisd9ban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.219 13.852v20.346L24.06 44.499V3.5zM24.06 44.5l17.721-10.23l-17.72-10.231");
}
</style><path class="ygisd9ban"/>`,
		"fallback": "arcticons:luma",
	});
}

export default Component;
