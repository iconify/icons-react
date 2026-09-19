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
		"content": `<style>.k7wssybtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.175 30.347l-2.89-9.57l2.692-.982a3.07 3.07 0 0 1 4.033 2.075a3.61 3.61 0 0 1-2.123 4.322l-2.652 1.045m-14.879-2.51l6.137-1.76l-3.481 11.024l6.138-1.76");
}

.pa8b_dbve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 13.601h39v24.368h-39zm13.815 0l.009-1.569a2 2 0 0 1 2-1.988h8.07a2 2 0 0 1 2 2.017l-.013 1.54m-9.505 8.169l2.936 9.663m8.727-13.854l2.267 7.809");
}

.pt5rcacfu {
  cx: 35.635px;
  cy: 28.142px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="pa8b_dbve"/><circle class="pt5rcacfu"/><path class="k7wssybtm"/>`,
		"fallback": "arcticons:togozip",
	});
}

export default Component;
