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
		"content": `<style>.pyuuugbad {
  width: 37px;
  height: 28px;
  x: 5.5px;
  y: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.uoaxilb8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15 14.5v-5c0-2.216 1.784-4 4-4h10c2.216 0 4 1.784 4 4v5m-27.5 16c2.12-3.671 9.091-11.432 18.5-6s16.38-2.329 18.5-6M6.056 40.552c2.62-3.873 9.24-10.14 17.944-5.115c9.409 5.433 16.381-2.329 18.5-6");
}
</style><rect class="pyuuugbad"/><path class="uoaxilb8z"/>`,
		"fallback": "arcticons:sap-concur",
	});
}

export default Component;
