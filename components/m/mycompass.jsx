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
		"content": `<style>.bxit74bui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 31.372l-2.07-2.05V25.37l-1.21-1.2l2.96-3.22l-1.75-1.731v-2.1l-2.02-2.001H9.5v-2.37l-5 2.369v20.135h35.109z");
}

.bxvvunbjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.112 27.971v-8.002h2.6a2.7 2.7 0 1 1 .003 5.401h-2.603m6.352 2.601l2.7-8.002l2.701 8.002m-.9-2.7h-3.6");
}
</style><path class="bxit74bui"/><path class="bxvvunbjp"/>`,
		"fallback": "arcticons:mycompass",
	});
}

export default Component;
