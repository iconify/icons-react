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
		"content": `<style>.lq5x2z2rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.892 10.703l-11.88 11.879a7.358 7.358 0 0 0 10.406 10.405l11.88-11.879l5.202 5.203L30.62 38.19A14.716 14.716 0 0 1 9.81 17.38L21.69 5.5Zm-9.236-1.17l5.203 5.203m10.405 10.405l5.203 5.203");
}
</style><path class="lq5x2z2rv"/>`,
		"fallback": "arcticons:magnetometer",
	});
}

export default Component;
