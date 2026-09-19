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
		"content": `<style>.pdjh2eyvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 3.495l20.499 20.499l-20.5 20.499l-20.498-20.5z");
}

.t-fvx22mk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.83 32.5c2.37 0 4.53-4.78 5.17-8.5s2.8-8.5 5.17-8.5");
}
</style><path class="pdjh2eyvt"/><path class="t-fvx22mk"/>`,
		"fallback": "arcticons:siddharthabanksmart",
	});
}

export default Component;
