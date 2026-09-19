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
		"content": `<style>.li095g71p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.196 42.5H6.152V18.947L24.033 5.5l17.815 14.454");
}
</style><path class="li095g71p"/>`,
		"fallback": "arcticons:legrand-control",
	});
}

export default Component;
