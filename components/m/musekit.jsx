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
		"content": `<style>.e4zwrlyuo {
  cx: 36.775px;
  cy: 31.75px;
  r: 4.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.hn9hirbss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.975 37.75V13.08A4.75 4.75 0 0 1 19.9 8.402l16.05-2.83a4.75 4.75 0 0 1 5.575 4.678v21.5");
}

.k2mdhgb2i {
  cx: 11.225px;
  cy: 37.75px;
  r: 4.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="k2mdhgb2i"/><circle class="e4zwrlyuo"/><path class="hn9hirbss"/>`,
		"fallback": "arcticons:musekit",
	});
}

export default Component;
