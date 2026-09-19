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
		"content": `<style>.c9bjc-bxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24h5.375M24 7.875V2.5M40.125 24H45.5M24 40.125V45.5");
}

.q04ibibrl {
  cx: 24px;
  cy: 24px;
  r: 16.125px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ydg-435rt {
  cx: 24px;
  cy: 24px;
  r: 6.271px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="q04ibibrl"/><circle class="ydg-435rt"/><path class="c9bjc-bxk"/>`,
		"fallback": "arcticons:seguime",
	});
}

export default Component;
