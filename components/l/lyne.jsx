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
		"content": `<style>.q8yl-8buz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.094 10.998l6.499 6.498l-6.499 6.499l-6.498-6.499zM24.098 11l6.498 6.499l-6.498 6.498l-6.499-6.498zm13.002-.007l6.497 6.498l-6.498 6.498l-6.498-6.498zM11.102 24l6.498 6.5l-6.498 6.498L4.603 30.5z");
}

.yw21qn6dh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.094 23.992l6.499 6.499l-6.499 6.498l-6.498-6.498zm13.003.003l6.498 6.498l-6.498 6.498l-6.499-6.498z");
}
</style><path class="q8yl-8buz"/><path class="yw21qn6dh"/>`,
		"fallback": "arcticons:lyne",
	});
}

export default Component;
