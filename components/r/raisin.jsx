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
		"content": `<style>.yl75gfo6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.766 41.958L42.5 5.5l-37 .271m37-.271v37");
}
</style><path class="yl75gfo6c"/>`,
		"fallback": "arcticons:raisin",
	});
}

export default Component;
