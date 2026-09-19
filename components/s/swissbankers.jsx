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
		"content": `<style>.e6g5ev1ue {
  cx: 39.145px;
  cy: 13.79px;
  r: 4.355px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qw3xuwahg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.145 38.565l-11.549-20.42l-11.548 20.42L4.5 18.145");
}
</style><path class="qw3xuwahg"/><circle class="e6g5ev1ue"/>`,
		"fallback": "arcticons:swissbankers",
	});
}

export default Component;
