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
		"content": `<style>.vpncdky5v {
  cx: 35.291px;
  cy: 19.357px;
  r: 5.156px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ymh475bot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.175 34.202a9.7 9.7 0 0 0 2.448.31a9.7 9.7 0 0 0 8.098-4.355a9.7 9.7 0 0 0 8.099 4.356c3.526 0 6.604-1.886 8.305-4.697c1.701 2.811 4.78 4.697 8.305 4.697c.71 0 1.403-.077 2.07-.221h0L16.547 13.487l-10.833 7.29a2.746 2.746 0 0 0 3.065 4.556l6.826-4.592l4.199 3.371z");
}
</style><circle class="vpncdky5v"/><path class="ymh475bot"/>`,
		"fallback": "arcticons:meet-mobile",
	});
}

export default Component;
