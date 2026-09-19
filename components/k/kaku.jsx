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
		"content": `<style>.ekvwd8qis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.46 11.13V42.5m33.08-31.37V42.5m0-3.65H7.46M40.54 5.5H7.46m7.16 7.63h18.75v18.75H14.62zM24 5.5v26.38m-9.38-9.37h18.76");
}
</style><path class="ekvwd8qis"/>`,
		"fallback": "arcticons:kaku",
	});
}

export default Component;
