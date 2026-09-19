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
		"content": `<style>.hfrmw-b_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 21.757l6.366 6.373l7.955-7.965l7.956 7.965l7.956-7.965l6.767 6.767M10.158 5.5h27.685a4.647 4.647 0 0 1 4.657 4.637v27.705a4.647 4.647 0 0 1-4.636 4.658H10.158A4.647 4.647 0 0 1 5.5 37.864V10.157A4.647 4.647 0 0 1 10.137 5.5z");
}
</style><path class="hfrmw-b_u"/>`,
		"fallback": "arcticons:txd-tool",
	});
}

export default Component;
