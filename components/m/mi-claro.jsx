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
		"content": `<style>.g8y0s0bkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.05 27.15c-6.224 0-11.356 5.135-11.356 11.363a3.986 3.986 0 0 0 3.984 3.987h14.745c2.2 0 3.984-1.785 3.985-3.987c0-6.229-5.133-11.364-11.357-11.364m-.001-16.758V5.5m8.364 13.256h4.892m-7.344-5.912l5.353-5.353");
}

.qmv8tbb6q {
  cx: 23.051px;
  cy: 18.756px;
  r: 4.89px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="g8y0s0bkv"/><circle class="qmv8tbb6q"/>`,
		"fallback": "arcticons:mi-claro",
	});
}

export default Component;
