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
		"content": `<style>.ae3if5b3a {
  cx: 42.514px;
  cy: 34.75px;
  r: 2.986px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.kj2jsvbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.153 11.777L24 39.249L13.847 11.777");
}
</style><circle class="cpk0fnbgt"/><path class="kj2jsvbzx"/><circle class="ae3if5b3a"/>`,
		"fallback": "arcticons:vietcetera",
	});
}

export default Component;
