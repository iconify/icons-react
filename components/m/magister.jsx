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
		"content": `<style>.g2qvqqb-w {
  cx: 40.328px;
  cy: 35.225px;
  r: 3.172px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wac2npwnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.365l5.57-28.762l8.827 19.967l8.826-19.923l5.571 28.75");
}
</style><path class="wac2npwnj"/><circle class="g2qvqqb-w"/>`,
		"fallback": "arcticons:magister",
	});
}

export default Component;
