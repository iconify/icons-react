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
		"content": `<style>.gwt_wbb2t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 10.5h-31a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4v-19a4 4 0 0 0-4-4");
}

.tqi02e-jv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.001 16.872L20.36 31.513s-7.243-7.175-7.32-7.175");
}
</style><path class="tqi02e-jv"/><path class="gwt_wbb2t"/>`,
		"fallback": "arcticons:seriesguide",
	});
}

export default Component;
