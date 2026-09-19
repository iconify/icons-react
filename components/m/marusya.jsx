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
		"content": `<style>.fc4d5xx_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.543 39.085C10.63 35.869 8.871 33.009 8.871 24s1.758-11.87 4.672-15.085S20.81 4.5 24 4.5s7.543 1.2 10.457 4.415c2.914 3.216 4.672 6.076 4.672 15.085s-1.758 11.87-4.672 15.085S27.19 43.5 24 43.5s-7.543-1.2-10.457-4.415");
}
</style><path class="fc4d5xx_j"/>`,
		"fallback": "arcticons:marusya",
	});
}

export default Component;
