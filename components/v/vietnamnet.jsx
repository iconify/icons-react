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
		"content": `<style>.hj7umc59y {
  cx: 20.047px;
  cy: 15.358px;
  r: 2.659px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z452y_bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.903c3.454 1.994 9.9 10.464 11.966 18.17L43.5 10.927L16.466 29.54V18.903z");
}
</style><path class="z452y_bat"/><circle class="hj7umc59y"/>`,
		"fallback": "arcticons:vietnamnet",
	});
}

export default Component;
