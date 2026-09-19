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
		"content": `<style>.g0i4x9bkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.75 39.888l24.212-14.775c2.801-1.71 2.88-5.455 1.049-7.443L23.424 4.003c-1.567-1.702-4.632-1.4-6.117.052L12.47 8.79c-1.539 1.505-1.718 2.53-1.718 4.806z");
}

.necd2tb-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.75 39.888l10.76 5.034c2.045.957 4.452-1.177 3.78-3.377L14.695 6.887");
}
</style><path class="g0i4x9bkq"/><path class="necd2tb-d"/>`,
		"fallback": "arcticons:pixverse",
	});
}

export default Component;
