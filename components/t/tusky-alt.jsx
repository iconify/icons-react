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
		"content": `<style>.u6--fbbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.16 11.73C8.7 13.28 4.5 17.42 4.5 24.46s5.75 11.81 13.91 11.81s16-5.38 18-19.41");
}

.v9ybfeb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.65 11.73c4.08 1.48 7.61 4.85 9.4 11.19c2 7.11 5 11.06 8.84 11.06s6.61-2.47 6.61-10.32a18.5 18.5 0 0 0-1.06-6.38");
}
</style><path class="u6--fbbop"/><path class="v9ybfeb_q"/>`,
		"fallback": "arcticons:tusky-alt",
	});
}

export default Component;
