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
		"content": `<style>.vhr0ybczj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.071 4.5h-6.285v5.571h6.5V37.93h-6.5v5.57h6.285a3 3 0 0 0 3-3v-33a3 3 0 0 0-3-3m-18.142 39h6.285v-5.571h-6.5V10.07h6.5V4.5H14.93a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3");
}
</style><path class="vhr0ybczj"/>`,
		"fallback": "arcticons:viettel-money",
	});
}

export default Component;
