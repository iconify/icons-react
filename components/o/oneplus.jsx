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
		"content": `<style>.odhl43bms {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.508 20.109za4.19 4.19 0 0 1-4.191 4.192");
}

.q6djenbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.222 20.109V6.5m-7.331 6.278H44.5m-6.278 11.876V41.5H9.5V12.778h16.846m-1.838 21.816V20.109");
}
</style><path class="q6djenbqv"/><path class="odhl43bms"/>`,
		"fallback": "arcticons:oneplus",
	});
}

export default Component;
