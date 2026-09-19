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
		"content": `<style>.pct9h5k4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.215 24c0 1.54-.198 3.034-.569 4.459c-1.975 7.582-8.868 13.18-17.07 13.18c-9.74 0-17.638-7.898-17.638-17.639S13.835 6.362 23.577 6.362c2.567 0 5.006.548 7.207 1.535");
}

.sny_ejo5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.418 21.706l6.848 7.33L42.062 7.672");
}
</style><path class="pct9h5k4m"/><path class="sny_ejo5e"/>`,
		"fallback": "arcticons:structured",
	});
}

export default Component;
