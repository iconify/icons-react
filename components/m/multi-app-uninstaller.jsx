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
		"content": `<style>.dg3b7_b0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.6 14.764h21.883V41.12a2.38 2.38 0 0 1-2.38 2.38H14.98a2.38 2.38 0 0 1-2.38-2.38z");
}

.r1zn0hbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.326 8.011V4.5h7.348v3.511M17.59 35.083l11.903-11.902m-11.903 0l11.903 11.902");
}

.rhdmcnble {
  width: 27.574px;
  height: 6.753px;
  x: 10.213px;
  y: 8.011px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1px;
  ry: 1px;
}
</style><path class="dg3b7_b0p"/><rect class="rhdmcnble"/><path class="r1zn0hbho"/>`,
		"fallback": "arcticons:multi-app-uninstaller",
	});
}

export default Component;
