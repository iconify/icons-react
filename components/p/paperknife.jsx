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
		"content": `<style>.wy6lm8kdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.958L42.5 24H16.382zm0-33.916L42.5 24H16.382z");
}
</style><path class="wy6lm8kdi"/>`,
		"fallback": "arcticons:paperknife",
	});
}

export default Component;
