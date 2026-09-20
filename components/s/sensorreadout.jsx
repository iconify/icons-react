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
		"content": `<style>.bnif67bax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a13.6 13.6 0 0 0 0 27.19A13.6 13.6 0 0 0 24 4.5m0 7.7a5.93 5.93 0 1 0 5.93 5.93A5.94 5.94 0 0 0 24 12.2m9.74 25.73L36.11 42h-4.72Zm0 0l2.37-4.09h-4.72Zm3.85 0H10.36");
}
</style><path class="bnif67bax"/>`,
		"fallback": "arcticons:sensorreadout",
	});
}

export default Component;
