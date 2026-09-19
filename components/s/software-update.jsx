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
		"content": `<style>.i_1zgffhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.922 20.142l-5.46-5.178l-5.458 5.178");
}

.obd33rtth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.401 4h18.124a3.01 3.01 0 0 1 3.02 3v33c0 1.657-1.352 3-3.02 3H15.4a3.01 3.01 0 0 1-3.02-3V7c0-1.657 1.352-3 3.02-3m9.063 26.272V14.964");
}
</style><path class="obd33rtth"/><path class="i_1zgffhd"/>`,
		"fallback": "arcticons:software-update",
	});
}

export default Component;
