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
		"content": `<style>.biuq55b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.951 5.117L18.137 27.845C-1.57 56.44 34.348 25.331 32.18 43.5M14.969 31.363l-4.739-.595l2.885-3.806z");
}

.wgrqprbcl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.443 6.838L35.43 4.5l2.339 16.989l-20.22 7.16zm.467.416l18.246 13.864");
}

.z6zmptb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.304 32.67l-4.701-.836l1.626 4.49z");
}
</style><path class="wgrqprbcl"/><path class="biuq55b7k"/><path class="z6zmptb1f"/>`,
		"fallback": "arcticons:kite",
	});
}

export default Component;
