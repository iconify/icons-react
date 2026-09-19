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
		"content": `<style>.cll99bgay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39 5H9a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4h23.56V32.56H43V9a4 4 0 0 0-4-4m-6.44 38L43 32.56M10.5 14h27m-27 10h27m-27 10h16.06");
}
</style><path class="cll99bgay"/>`,
		"fallback": "arcticons:s-notz",
	});
}

export default Component;
