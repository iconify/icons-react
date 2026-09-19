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
		"content": `<style>.vbt_swb8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5L8.954 15.105L24 25.944M8.852 17.079L6.805 18.52l15.046 10.84m0 0L24 30.908M8.954 23.366L24 34.206M8.954 27.672L24 38.512M8.954 32.66L24 43.5M8.954 15.105V32.66M24 25.944v4.964M24 4.5l15.046 10.605L24 25.944m15.171-8.849l2.024 1.426L26.149 29.36m0 0L24 30.908m15.046-7.542L24 34.206m15.046-6.534L24 38.512m15.046-5.852L24 43.5m15.046-28.395V32.66M24 25.944v4.964m0 0V43.5");
}
</style><path class="vbt_swb8k"/>`,
		"fallback": "arcticons:stack",
	});
}

export default Component;
