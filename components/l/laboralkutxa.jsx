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
		"content": `<style>.cfyreebij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.51 43.5H24V25.72m0 12.99h3.96");
}

.m7_jq0g_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a10.61 10.61 0 1 0 10.61 10.61");
}
</style><path class="m7_jq0g_l"/><path class="cfyreebij"/>`,
		"fallback": "arcticons:laboralkutxa",
	});
}

export default Component;
