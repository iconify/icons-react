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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v5f4j9bwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.93 35.599V12.401h7.876c4.453 0 8.063 3.488 8.063 7.79s-3.61 7.792-8.063 7.792H16.93");
}
</style><circle class="cpk0fnbgt"/><path class="v5f4j9bwq"/>`,
		"fallback": "arcticons:product-hunt",
	});
}

export default Component;
