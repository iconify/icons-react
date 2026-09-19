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
		"content": `<style>.owh5yqsjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.517 28.615a3.493 3.493 0 0 1-3.482-3.483v-2.264c0-1.915 1.567-3.482 3.482-3.482S39 20.953 39 22.868v2.264a3.493 3.493 0 0 1-3.483 3.482M8 19.386l3.483 9.229l3.482-9.23m7.307.001l3.483 9.229l3.482-9.23m-10.618.001v9.229");
}

.yjm1qhb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35.5v-23a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4");
}
</style><path class="owh5yqsjc"/><path class="yjm1qhb_m"/>`,
		"fallback": "arcticons:vivocom",
	});
}

export default Component;
