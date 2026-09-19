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
		"content": `<style>.fkcp_6b5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.56 10.772C4.137 6.97 5.443 26.569 22.892 26.245c15.761-.292 19.802 20.306-14.452 15.539");
}

.r_y3w3bvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.076 5.5l6.484 5.272l-6.452 5.304");
}
</style><path class="fkcp_6b5g"/><path class="r_y3w3bvu"/>`,
		"fallback": "arcticons:sidestep",
	});
}

export default Component;
